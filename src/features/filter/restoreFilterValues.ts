export function restoreFilterValues(player: string, difficulty: string) {
  const playerFilter = document.getElementById(
    'player-filter-options'
  ) as HTMLInputElement | null;
  const difficultyFilter = document.getElementById(
    'difficulty-filter-options'
  ) as HTMLInputElement | null;

  if (!playerFilter || !difficultyFilter) return;

  playerFilter.value = player;
  difficultyFilter.value = difficulty;
}
