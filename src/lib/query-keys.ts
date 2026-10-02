export const starterKeys = {
  all: ["starters"] as const,
  member: (memberId: string) => [...starterKeys.all, "member", memberId] as const,
  cohort: (cohortId: string) => [...starterKeys.all, "cohort", cohortId] as const,
};
