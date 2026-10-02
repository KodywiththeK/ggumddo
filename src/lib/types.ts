export type CohortId = string;
export type MemberId = string;

export type StarterQuestion = {
  id: string;
  text: string;
  answer: string;
};

export type Assignment = {
  title: string;
  body: string;
};

export type StarterWeek = {
  id: string;
  week: 1 | 2 | 3 | 4 | 5;
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
  questions: StarterQuestion[];
  assignment?: Assignment;
  reflection?: string;
};

export type ThirtyDayChallenge = {
  statement: string;
  reason: string;
  firstAction: string;
  expectedLearning?: string;
};

export type StarterMember = {
  id: MemberId;
  cohortId: CohortId;
  cohortLabel: string;
  name: string;
  bio: string;
  keywords: string[];
  weeks: StarterWeek[];
  challenge: ThirtyDayChallenge;
};

export type StarterCohort = {
  id: CohortId;
  label: string;
  description: string;
  memberIds: MemberId[];
};
