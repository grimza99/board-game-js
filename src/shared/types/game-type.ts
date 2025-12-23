export type TGameDifficulty = '쉬움' | '중간' | '어려움';
export type TGameDifficultyToEng = 'easy' | 'normal' | 'hard';

export interface IGame {
  id: number;
  name: string;
  players: string;
  playtime: number;
  difficulty: TGameDifficulty;
  image: string;
  description: string;
}

export type TDifficultyFilterOption = 'all' | TGameDifficultyToEng;
export type TPlayerFilterOption = 'all' | '2' | '3' | '4' | '5+';
