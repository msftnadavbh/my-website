export const analyticsEvents = [
  "case_study_open",
  "repository_open",
  "contact_linkedin",
] as const;

export type AnalyticsConsent = "accepted" | "declined" | null;
export type AnalyticsEvent = (typeof analyticsEvents)[number];

export const analyticsConsentKey = "nadav-analytics-consent";

export function normalizeAnalyticsConsent(
  value: string | null,
): AnalyticsConsent {
  return value === "accepted" || value === "declined" ? value : null;
}

export function shouldLoadAnalytics(
  measurementId: string | undefined,
  consent: AnalyticsConsent,
) {
  return Boolean(measurementId) && consent === "accepted";
}
