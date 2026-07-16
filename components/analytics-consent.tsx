"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import {
  type AnalyticsConsent as AnalyticsConsentValue,
  analyticsConsentKey,
  analyticsEvents,
  normalizeAnalyticsConsent,
  shouldLoadAnalytics,
} from "@/lib/analytics";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function AnalyticsConsent({
  measurementId,
}: {
  measurementId?: string;
}) {
  const pathname = usePathname();
  const [consent, setConsent] = useState<AnalyticsConsentValue>(null);
  const [ready, setReady] = useState(false);
  const loadAnalytics = shouldLoadAnalytics(measurementId, consent);

  useEffect(() => {
    setConsent(
      normalizeAnalyticsConsent(localStorage.getItem(analyticsConsentKey)),
    );
    setReady(true);

    function trackLink(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        "a[data-analytics-event]",
      );
      const eventName = link?.dataset.analyticsEvent;
      if (
        eventName &&
        analyticsEvents.includes(eventName as (typeof analyticsEvents)[number])
      ) {
        window.gtag?.("event", eventName);
      }
    }

    document.addEventListener("click", trackLink);
    return () => document.removeEventListener("click", trackLink);
  }, []);

  useEffect(() => {
    if (!loadAnalytics) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      };
    window.gtag("event", "page_view", { page_path: pathname });
  }, [loadAnalytics, pathname]);

  function choose(nextConsent: Exclude<AnalyticsConsentValue, null>) {
    if (nextConsent === "declined") {
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
    }
    localStorage.setItem(analyticsConsentKey, nextConsent);
    setConsent(nextConsent);
  }

  if (!ready || !measurementId) return null;

  return (
    <>
      {loadAnalytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('consent','default',{analytics_storage:'granted'});gtag('config','${measurementId}',{send_page_view:false});`}
          </Script>
        </>
      )}
      {consent === null ? (
        <aside className="consent" aria-label="Analytics preference">
          <p>
            <strong>Optional analytics</strong> Help improve this site with
            anonymous page and link events. No analytics request is sent unless
            you accept. <a href="/privacy">Privacy details</a>.
          </p>
          <div>
            <button
              className="button button--primary"
              onClick={() => choose("accepted")}
              type="button"
            >
              Accept
            </button>
            <button
              className="button"
              onClick={() => choose("declined")}
              type="button"
            >
              Decline
            </button>
          </div>
        </aside>
      ) : (
        <button
          className="consent-reset"
          onClick={() => setConsent(null)}
          type="button"
        >
          Privacy choices
        </button>
      )}
    </>
  );
}
