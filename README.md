# 꿈또 스타터즈 아카이브

꿈꾸는 또라이가 세상을 이긴다 — 스타터즈 7기의 실제 글을 주차별 책장 형태로 읽는 정적 MVP입니다.

## 실행

```bash
npm install
npm run dev
```

현재 등록된 참여자:

- 스타터즈 7기 / 현지혜
- 스타터즈 7기 / 김강우
- 스타터즈 7기 / 이윤경

## 검증 및 빌드

```bash
npm run typecheck
npm run build
```

`npm run build`는 `src/data/content/*.md`를 구조화된 `src/data/starter-records.json`으로 변환한 뒤 정적 페이지를 생성합니다.

## 데이터 구조

- `src/data/content/*.md`: 참여자가 제출한 원문. 콘텐츠의 source of truth
- `scripts/generate-starter-data.mjs`: Markdown heading 구조를 주차/섹션/미디어 데이터로 변환
- `src/data/starter-records.json`: 앱이 읽는 정적 JSON snapshot
- `src/lib/record-types.ts`: 나중에 DB 테이블과 API DTO로 옮길 수 있는 타입
- `src/lib/records.ts`: 현재 정적 repository. 이후 API/DB repository로 교체 가능

원문을 수정하거나 새 참여자 Markdown을 추가한 뒤에는 다음 명령으로 JSON을 갱신합니다.

```bash
npm run prepare:data
```

## 주요 화면

- `/`: 꿈또 소개
- `/enter`: 기수와 이름으로 기록 찾기
- `/starter/[memberId]`: 개인 기록 책장
- `/cohort/[cohortId]`: 같은 기수 멤버 목록

현재는 서버·DB·로그인이 없는 공개 정적 기록입니다. 진입 화면의 이름 찾기는 인증이 아니라 정적 데이터 검색이며, 실제 개인정보나 비공개 기록은 저장하지 않아야 합니다.
