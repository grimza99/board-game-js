import { crawlAndSave } from './crawl-save.mjs';
import { saveNormalizedJson } from './normalize.mjs';

const games = [
  {
    gameId: 1,
    gameName: 'Carcassonne',
    url: 'https://www.ultraboardgames.com/carcassonne/game-rules.php',
  },
];

async function runProcess() {
  for (const game of games) {
    console.log(
      `\n=============== [PROCESS START]: ${game.gameName} ===============`
    );

    await crawlAndSave(game);
    saveNormalizedJson(game);

    console.log(`\n=============== [DONE]: ${game.gameName} ===============`);
  }
}

runProcess().catch(console.error);
