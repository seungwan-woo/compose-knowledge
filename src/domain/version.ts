import type { ArtifactVersion, Platform, SearchQuery, VersionStatus } from './types.js';

export function normalizeArtifact(artifact: string, _platform?: Platform): string {
  const aliases: Record<string, string> = {
    'androidx.compose.ui:ui-android': 'androidx.compose.ui:ui',
    'androidx.compose.material3:material3-android': 'androidx.compose.material3:material3',
  };
  return aliases[artifact] ?? artifact;
}

function sameArtifact(a: ArtifactVersion, b: ArtifactVersion): boolean {
  if (a.artifact === b.artifact) {
    return !a.platform || a.platform === b.platform || b.artifact.endsWith('-android');
  }
  return normalizeArtifact(a.artifact) === normalizeArtifact(b.artifact) &&
    (a.artifact.endsWith('-android') || b.artifact.endsWith('-android') || (a.platform === 'android' && b.platform === 'android'));
}

export function getVersionStatus(requires: ArtifactVersion[], query: SearchQuery): VersionStatus {
  const requested = (query.versions ?? []).map(item => ({...item, platform: item.platform ?? query.platform}));
  if (query.artifact && query.version !== undefined) requested.push({artifact: query.artifact, version: query.version, platform: query.platform});
  for (let i = 0; i < requested.length; i++) for (let j = i + 1; j < requested.length; j++) {
    const a = requested[i]!, b = requested[j]!;
    if ((sameArtifact(a, b) || sameArtifact(b, a)) && a.version !== b.version) {
      throw new Error(`Conflicting requested versions for ${a.artifact}`);
    }
  }
  let unknown = requires.length === 0;
  let different = false;
  for (const required of requires) {
    const found = requested.find(item => sameArtifact(required, item));
    if (!found || found.version === null || required.version === null) unknown = true;
    else if (found.version !== required.version) different = true;
  }
  return different ? 'different' : unknown ? 'unknown' : 'match';
}
