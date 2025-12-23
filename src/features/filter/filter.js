import GAME_LIST from '../../game-list/game-list-Item';

const DIFFICULTY_MAP = {
  hard: '어려움',
  normal: '중간',
  easy: '쉬움',
};
/**--------------플레이어수 & 난이도 필터링---------------*/
export function filteredGames(selectedPlayer, selectedDifficulty) {
  let filteredGames = [];

  if (selectedPlayer === 'all') {
    filteredGames = GAME_LIST;
  } else if (selectedPlayer === '5+') {
    filteredGames = GAME_LIST.filter((game) => {
      if (game.players.includes('-')) {
        const maxPlayers = parseInt(game.players.split('-')[1]);
        return maxPlayers >= 5;
      }
      return parseInt(game.players) >= 5;
    });
  } else {
    const targetPlayers = parseInt(selectedPlayer);
    filteredGames = GAME_LIST.filter((game) => {
      if (game.players.includes('-')) {
        const [min, max] = game.players.split('-').map(Number);

        return targetPlayers >= min && targetPlayers <= max;
      }
      return parseInt(game.players) === targetPlayers;
    });
  }

  if (selectedDifficulty !== 'all') {
    filteredGames = filteredGames.filter((game) => {
      return DIFFICULTY_MAP[selectedDifficulty] === game.difficulty;
    });
  }
  return filteredGames;
}
