import pkg from "@pieui/react/package.json";

/** Semver from published `@pieui/react` (source of truth for docs). */
export const PIE_UI_VERSION = pkg.version;

/** Display tag e.g. `v0.4.0` */
export const PIE_UI_VERSION_TAG = `v${PIE_UI_VERSION}`;

/** Major.minor for compact hero copy e.g. `v0.4` */
export const PIE_UI_VERSION_ABBREV = (() => {
  const parts = PIE_UI_VERSION.split(".").filter(Boolean);
  if (parts.length >= 2) return `v${parts[0]}.${parts[1]}`;
  return PIE_UI_VERSION_TAG;
})();
