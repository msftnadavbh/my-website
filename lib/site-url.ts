type DeploymentEnvironment = Readonly<
  Partial<
    Record<
      | "SITE_URL"
      | "VERCEL_ENV"
      | "VERCEL_PROJECT_PRODUCTION_URL"
      | "VERCEL_URL",
      string
    >
  >
>;

function asHttpsUrl(host: string | undefined) {
  return host ? `https://${host}` : undefined;
}

function withoutTrailingSlash(url: string) {
  return url.replace(/\/$/, "");
}

export function resolveSiteUrl(environment: DeploymentEnvironment) {
  const explicitUrl = environment.SITE_URL;

  if (explicitUrl) {
    return withoutTrailingSlash(explicitUrl);
  }

  if (environment.VERCEL_ENV === "preview") {
    return asHttpsUrl(environment.VERCEL_URL) ?? "http://localhost:3000";
  }

  if (environment.VERCEL_ENV === "production") {
    return (
      asHttpsUrl(environment.VERCEL_PROJECT_PRODUCTION_URL) ??
      asHttpsUrl(environment.VERCEL_URL) ??
      "http://localhost:3000"
    );
  }

  return "http://localhost:3000";
}

export function shouldIndexSite(environment: DeploymentEnvironment) {
  return (
    Boolean(environment.SITE_URL) || environment.VERCEL_ENV === "production"
  );
}

const deploymentEnvironment: DeploymentEnvironment = {
  SITE_URL: process.env.SITE_URL,
  VERCEL_ENV: process.env.VERCEL_ENV,
  VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
  VERCEL_URL: process.env.VERCEL_URL,
};

export const siteUrl = resolveSiteUrl(deploymentEnvironment);
export const shouldIndex = shouldIndexSite(deploymentEnvironment);
