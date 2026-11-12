// Only published Android variants with a known common artifact share identity.
const composeArtifacts = [
  'runtime:runtime', 'runtime:runtime-saveable',
  'foundation:foundation', 'foundation:foundation-layout',
  'animation:animation', 'animation:animation-core', 'animation:animation-graphics',
  'ui:ui', 'ui:ui-text', 'ui:ui-graphics', 'ui:ui-unit', 'ui:ui-util', 'ui:ui-geometry', 'ui:ui-tooling-preview', 'ui:ui-test', 'ui:ui-test-junit4-accessibility',
  'material:material', 'material:material-icons-core', 'material:material-icons-extended', 'material:material-ripple',
  'material3:material3', 'material3.adaptive:adaptive', 'material3.adaptive:adaptive-navigation',
].map(artifact => `androidx.compose.${artifact}`);

const androidAliases = new Map(composeArtifacts.map(artifact => [`${artifact}-android`, artifact]));

export function normalizeComposeArtifact(artifact: string): string {
  return androidAliases.get(artifact) ?? artifact;
}
