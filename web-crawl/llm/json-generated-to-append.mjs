import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { DIR } from '../constants.mjs';
import {
  stringifyWithExpressions,
  toConstantName,
  toFileName,
} from '../utils/util.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//game list item 객체에 llm-out json 객체의 summaryObject를 추가
export function appendToJsArrayFile({ gameId, gameName }) {
  console.log(`APPEND TO JS ARRAY FILE :${gameName}`);

  const targetPath = path.resolve(
    DIR.LLM_OUTPUT,
    toFileName(gameId, gameName) + '.json'
  );
  const newObject = JSON.parse(
    fs.readFileSync(targetPath, 'utf-8')
  ).summaryObject;

  const indexPath = path.resolve(
    __dirname,
    '../../src/game-list/game-list-item.js'
  );

  let content = fs.readFileSync(indexPath, 'utf-8');

  const arrayStart = `export const GAME_LIST = [`;
  if (!content.includes(arrayStart)) {
    throw new Error(`Export ${exportName} not found`);
  }

  const arrayEndIndex = content.lastIndexOf('];');
  if (arrayEndIndex === -1) {
    throw new Error('Array closing not found');
  }

  const before = content.slice(0, arrayEndIndex).trimEnd();
  const after = content.slice(arrayEndIndex);

  const objectString =
    '\n  ' + JSON.stringify(newObject, null, 2).replace(/\n/g, '\n  '); //eslint 룰에 의해서 항상 콤마 있음

  const updated = before + objectString + '\n' + after;

  fs.writeFileSync(indexPath, updated, 'utf-8');
}

/**ruleObject를 game-rules 폴더에 ts파일로 추가 */
export function saveAsTsExport({ gameId, gameName }) {
  console.log(`SAVE TS FILE :${gameName}`);

  const targetPath = path.resolve(
    DIR.LLM_OUTPUT,
    toFileName(gameId, gameName) + '.json'
  );
  const newObject = JSON.parse(fs.readFileSync(targetPath, 'utf-8')).ruleObject;

  const formattedObject = stringifyWithExpressions(newObject);
  const variableName = toConstantName(gameName);
  const fileName = toFileName(gameId, gameName) + '.ts';
  const slug = Math.ceil(gameId / 20);
  const outDir = path.resolve(`${DIR.GAME_DETAIL}/game-rules-${slug}`);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, fileName);
  const tsContent = `import GAME_LIST from '../../game-list/game-list-Item.js';\n\n 
  export const ${variableName} = ${formattedObject} as const;\n`;

  fs.writeFileSync(outPath, tsContent, 'utf-8');
}
function main() {
  appendToJsArrayFile({ gameId: 33, gameName: 'Rummikube' });
  saveAsTsExport({
    gameId: 33,
    gameName: 'Rummikube',
  });
}
main();
