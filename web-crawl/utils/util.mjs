import path from 'path';
import fs from 'fs';
import { DIR } from '../constants.mjs';

function toFileName(gameId, gameName, isEmbedded = false) {
  const slug = isEmbedded ? '-embedded' : '';
  const formattedGameName = gameName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return `${gameId}-${formattedGameName}${slug}`;
}

function cleanText(text) {
  return text
    .replace(/\r/g, '')
    .replace(/\n{2,}/g, '\n')
    .replace(/\s{2,}/g, ' ')
    .trim();
}
function resolveImageUrl(pageUrl, src) {
  if (!src) return '';
  if (src.startsWith('http')) return src;
  return new URL(src, pageUrl).href;
}
function readRawText(gameId, gameName, isEmbedded = false) {
  const fileName = toFileName(gameId, gameName, isEmbedded);
  const filePath = path.resolve(DIR.CRAWL_RAWS, fileName + '.txt');
  if (!fs.existsSync(filePath)) {
    throw new Error(`raw text 파일이 없습니다.- ${filePath}`);
  }

  return fs.readFileSync(filePath, 'utf-8');
}

function selectImage(gameId, gameName) {
  const imageDir = path.resolve(DIR.CRAWL_IMAGES);

  if (!fs.existsSync(imageDir)) return [];

  const prefix = toFileName(gameId, gameName);
  return fs.readdirSync(imageDir).find((file) => file === `${prefix}.jpeg`);
}

export { toFileName, cleanText, resolveImageUrl, readRawText, selectImage };
