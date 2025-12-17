import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { DIR } from './constants.mjs';
import { cleanText, resolveImageUrl, toFileName } from './utils/util.mjs';

async function downloadImage({ gameId, gameName, pageUrl, src }) {
  console.log(`\nIMAGE_DOWNLOAD : ${gameName}`);
  console.log(`URL: ${src}`);

  const imageUrl = resolveImageUrl(pageUrl, src);

  const res = await axios.get(imageUrl, {
    responseType: 'arraybuffer',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    },
  });

  if (!res.data) {
    console.warn(` \n  [WARN] ${gameName}-IMAGE `);
    console.warn(`이미지 다운로드 실패 : ${imageUrl}`);
  }

  const imageDir = path.resolve(DIR.CRAWL_IMAGES);
  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir);
  }
  const fileName = toFileName(gameId, gameName);
  const filePath = path.join(imageDir, `${fileName}.jpeg`);

  fs.writeFileSync(filePath, res.data);
}

export async function crawlAndSave({ gameId, gameName, url }) {
  console.log(`\nCRAWL : ${gameName}`);
  console.log(`URL: ${url}`);

  const res = await axios.get(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
    },
    timeout: 15000,
  });

  const $ = cheerio.load(res.data);
  const rawText = cleanText($('body #main').first().text());
  const img = $('.post-thumbnail').children('img').attr('src') || '';

  if (rawText.length < 1000) {
    console.warn(` [WARN] ${gameName}`);
    console.warn(` 텍스트 너무 짧음 (${rawText.length} chars)`);
  }

  const rawDir = path.resolve(DIR.CRAWL_RAWS);
  if (!fs.existsSync(rawDir)) {
    fs.mkdirSync(rawDir);
  }

  await downloadImage({
    gameId,
    gameName,
    pageUrl: url,
    src: img,
  });

  const fileName = toFileName(gameId, gameName);
  const filePath = path.join(rawDir, `${fileName}.txt`);

  fs.writeFileSync(filePath, rawText, 'utf-8');
  console.log(`\nCRAWL-SAVED : ${gameName}`);
}
