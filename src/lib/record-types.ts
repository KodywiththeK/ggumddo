export type RecordSectionType = "text" | "keywords" | "media" | "empty" | "missing" | "pending";

export type RecordMedia = { id: string; name: string; url: string };

export type RecordSection = {
  id: string;
  heading: string;
  type: RecordSectionType;
  body?: string;
  paragraphs?: string[];
  items?: string[];
  media?: RecordMedia[];
};

export type StarterWeekRecord = {
  id: string;
  week: 1 | 2 | 3 | 4 | 5;
  title: string;
  status: "complete" | "missing" | "pending";
  sections: RecordSection[];
};

export type StarterRecord = {
  id: string;
  cohortId: string;
  cohortLabel: string;
  name: string;
  bio: string;
  keywords: string[];
  weeks: StarterWeekRecord[];
};
