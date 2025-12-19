import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
import { buildPrompt } from './prompt.mjs';
import { DIR } from '../constants.mjs';
import { toFileName } from '../utils/util.mjs';
import { fileURLToPath } from 'url';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function generateJsonFromNormalized({ gameId, gameName }) {
  const fileName = toFileName(gameId, gameName) + '.json';
  const normalizedPath = path.resolve(__dirname, '../../normalized', fileName);
  const normalized = JSON.parse(fs.readFileSync(normalizedPath, 'utf-8'));

  const prompt = buildPrompt({
    gameId: normalized.gameId,
    gameName: normalized.gameName,
    rawText: normalized.content.rawText,
    videoEmbedded: normalized.source.videoEmbedded,
  });

  const res = await client.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.2,
  });

  const content = res.choices[0].message.content;

  const outDir = path.resolve(DIR.LLM_OUTPUT);
  fs.mkdirSync(outDir, { recursive: true });

  const outPath = path.join(outDir, fileName);

  fs.writeFileSync(outPath, content, 'utf-8');

  console.log(`[JSON GENERATED] ${outPath}`);
}
