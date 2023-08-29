import { GameCanvas } from 'renderer/state/types';

export const getToggledRatio = (gameCanvas: GameCanvas): number => {
  const numCanvasCellsSelected = gameCanvas.toggled.filter(
    (cell) => cell
  ).length;

  const numCanvasCells = gameCanvas.toggled.length;
  return numCanvasCellsSelected / numCanvasCells;
};

export function getRandomOption<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
