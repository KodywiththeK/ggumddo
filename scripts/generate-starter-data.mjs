import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(scriptDir, "..");
const contentDir = path.join(projectDir, "src/data/content");
const outputPath = path.join(projectDir, "src/data/starter-records.json");

const profileByName = {
  "현지혜": {
    bio: "자연스러움과 사람 사이의 좋은 경험을 오래 기억하는 사람.",
    keywords: ["자연", "사람", "경험", "조화", "성장"],
  },
  "김강우": {
    bio: "좋아하는 것을 구조화하고, 사람에게 도움이 되는 방향으로 성장하는 사람.",
    keywords: ["구조화", "분석", "책임감", "인정", "성장"],
  },
  "이윤경": {
    bio: "마음의 평화와 나다운 삶을 찾아가는 사람.",
    keywords: ["마음의 평화", "안정", "꼼꼼함", "관계", "자기이해"],
  },
};

const slugByName = { "현지혜": "hyeonji-hye", "김강우": "gangwoo-kim", "이윤경": "yunkyung-lee" };

const weekTitles = {
  1: "좋아하는 것",
  2: "세상에 필요한 것",
  3: "내 안의 강점",
  4: "나를 둘러싼 강점",
  5: "나의 방향과 첫 번째 도전",
};

function cleanHeading(value) {
  return value.replace(/^###\s*/, "").replace(/^\*\*(.*)\*\*$/, "$1").replace(/\u00a0/g, " ").replace(/^\d+\.\s*/, "").trim();
}

function paragraphs(body) {
  return body.trim().split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean);
}

function parseMedia(body) {
  return [...body.matchAll(/- \[([^\]]+)\]\(([^)]+)\)/g)].map((match, index) => ({ id: `media-${index + 1}`, name: match[1], url: match[2] }));
}

function parseSections(lines) {
  const sections = [];
  let current = null;
  function flush() {
    if (!current) return;
    const body = current.lines.join("\n").trim();
    const isMedia = current.heading.includes("사진");
    const isKeywords = current.heading.includes("키워드");
    const isEmpty = body === "X" || body === "";
    sections.push({
      id: current.id,
      heading: current.heading,
      type: isEmpty ? (body === "X" ? "missing" : "empty") : isMedia ? "media" : isKeywords ? "keywords" : "text",
      body: body === "X" ? "아직 작성된 기록이 없습니다." : body || undefined,
      paragraphs: !isEmpty && !isMedia ? paragraphs(body) : undefined,
      items: isKeywords ? body.split(/[,\n]/).map((item) => item.trim()).filter(Boolean) : undefined,
      media: isMedia ? parseMedia(body) : undefined,
    });
    current = null;
  }
  lines.forEach((line) => {
    if (line.startsWith("### ")) {
      flush();
      current = { id: `section-${sections.length + 1}`, heading: cleanHeading(line), lines: [] };
    } else if (current) current.lines.push(line);
  });
  flush();
  return sections;
}

function parseDocument(markdown, filename) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const displayName = lines.find((line) => /^# [^#]/.test(line))?.replace(/^# /, "").trim() ?? filename.replace(".md", "");
  const meta = lines.find((line) => line.startsWith("# 스타터즈")) ?? "# 스타터즈 7기";
  const cohortNumber = meta.match(/스타터즈\s+(\d+)기/)?.[1] ?? "7";
  const weeks = [];
  const weekIndexes = lines.reduce((indexes, line, index) => {
    if (/^## \d주차\./.test(line)) indexes.push(index);
    return indexes;
  }, []);
  weekIndexes.forEach((start, index) => {
    const headingMatch = lines[start].match(/^## (\d)주차\.\s*(.+)$/);
    if (!headingMatch) return;
    const week = Number(headingMatch[1]);
    let sections = parseSections(lines.slice(start + 1, weekIndexes[index + 1] ?? lines.length));
    if (sections.length === 0) sections = [{ id: `section-missing-`, heading: "아직 작성된 기록이 없습니다.", type: "missing", body: "이 주차의 기록은 아직 도착하지 않았어요." }];
    weeks.push({ id: `week-${week}`, week, title: weekTitles[week], status: sections.some((section) => section.type !== "empty" && section.type !== "missing") ? "complete" : "missing", sections });
  });
  for (let week = 1; week <= 5; week += 1) {
    if (!weeks.some((item) => item.week === week)) weeks.push({ id: `week-${week}`, week, title: weekTitles[week], status: "pending", sections: [{ id: `section-pending-${week}`, heading: "아직 도착하지 않은 기록", type: "pending", body: "이 주차의 기록은 다음 페이지에서 이어집니다." }] });
  }
  weeks.sort((a, b) => a.week - b.week);
  const profile = profileByName[displayName] ?? { bio: "나를 알아가며 다음 방향을 찾아가는 스타터.", keywords: [] };
  return { id: `starter-${cohortNumber}-${slugByName[displayName] ?? displayName}`, cohortId: `cohort-${cohortNumber}`, cohortLabel: `스타터즈 ${cohortNumber}기`, name: displayName, bio: profile.bio, keywords: profile.keywords, weeks };
}

const filenames = (await readdir(contentDir)).filter((filename) => filename.endsWith(".md")).sort();
const records = [];
for (const filename of filenames) records.push(parseDocument(await readFile(path.join(contentDir, filename), "utf8"), filename));
await writeFile(outputPath, `${JSON.stringify({ generatedAt: new Date().toISOString(), records }, null, 2)}\n`);
console.log(`Generated ${records.length} starter records from ${filenames.length} markdown files.`);

