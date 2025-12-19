import { crawlAndSave } from './crawl-save.mjs';
import { generateJsonFromNormalized } from './llm/generated.mjs';
import { saveLLMOutputToFile } from './llm/json-generated-to-append.mjs';
import { saveNormalizedJson } from './normalize.mjs';
import readline from 'readline';

function ask(rl, question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function runProcess() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  console.log('\nStart BoardWiki CLI\n');
  try {
    const gameId = await ask(rl, 'Game ID: ');
    const gameName = await ask(rl, 'Game Name: ');
    const url = await ask(rl, 'Game URL: ');
    const videoUrl = await ask(rl, 'Game Rule Video URL: ');

    if (!gameId || !gameName || !url) {
      console.error('\n❌ 모든 값을 입력해야 합니다.');
      rl.close();
      return;
    }

    const game = {
      gameId: Number(gameId),
      gameName,
      url,
      videoUrl,
    };

    console.log(
      `\n=============== [PROCESS START]: ${game.gameName} ===============`
    );
    await crawlAndSave(game);
    saveNormalizedJson(game);
    await generateJsonFromNormalized({ gameId, gameName });
    saveLLMOutputToFile(game);
    console.log(`\n=============== [DONE]: ${game.gameName} ===============`);

    const next = await ask(rl, '게임을 더 추가하나요? (y/n): ');

    if (next.toLowerCase() === 'y') {
      runProcess();
    } else {
      rl.close();
    }
  } catch (e) {
    console.log('\n[ERROR]', e.message);
    console.log('\ncli가 종료됩니다.');
    rl.close();
  }
}
runProcess();
