import fs from 'fs';
import path from 'path';
import { readRawText, toFileName } from './utils/util.mjs';
import { DIR } from './constants.mjs';

function buildNormalizedJson({ gameId, gameName, url }) {
  const rawText = readRawText(gameId, gameName);
  const videoEmbedded = readRawText(gameId, gameName, true);

  return {
    gameId,
    gameName,
    source: {
      url,
      videoEmbedded: videoEmbedded || null,
      type: 'rule-page',
    },
    content: {
      rawText,
      language: 'en',
    },
    meta: {
      collectedAt: new Date().toISOString(),
      pipelineVersion: 'v1',
      origin: 'ultraboardgames.com',
    },
  };
}

export function saveNormalizedJson({ gameId, gameName, url }) {
  console.log(`\nNORMALIZED-START : ${gameName}`);

  const data = buildNormalizedJson({ gameId, gameName, url });
  const outDir = path.resolve(DIR.NORMALIZED);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }

  const fileName = toFileName(gameId, gameName) + '.json';

  const filePath = path.join(outDir, fileName);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

  console.log(`\nNORMALIZED-SAVED : ${filePath}`);
}
