#!/usr/bin/env bash
set -euo pipefail
cd /workspace/compose-knowledge
node -e 'if (Number(process.versions.node.split(".")[0]) !== 24) throw new Error("Node.js 24 is required")'
npm_config_cache=/workspace/.npm-cache npm ci --ignore-scripts --no-audit --no-fund
npm run build
node scripts/prepare-demo.mjs
node scripts/verify-demo.mjs
