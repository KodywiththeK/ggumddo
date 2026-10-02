import recordData from "@/data/starter-records.json";
import type { StarterRecord } from "@/lib/record-types";

export const starterRecords = recordData.records as StarterRecord[];

export const starterCohorts = Array.from(
  new Map(starterRecords.map((record) => [record.cohortId, { id: record.cohortId, label: record.cohortLabel }])).values(),
);

export function normalizeName(value: string) {
  return value.trim().replace(/\s+/g, "").toLowerCase();
}

export function getRecordById(id: string) {
  return starterRecords.find((record) => record.id === id) ?? null;
}

export function getRecordsByCohort(cohortId: string) {
  return starterRecords.filter((record) => record.cohortId === cohortId);
}

export function findRecords(cohortId: string, name: string) {
  const normalized = normalizeName(name);
  return starterRecords.filter((record) => record.cohortId === cohortId && normalizeName(record.name) === normalized);
}
