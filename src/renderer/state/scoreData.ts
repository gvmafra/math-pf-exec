// scoreData.ts
interface LevelData {
  clickMax: number;
}

interface StageData {
  levels: LevelData[]; // Array of 10 levels
}

const scoreData: StageData[] = [
  // Stage 1
  {
    levels: [
      { clickMax: 1 },
      { clickMax: 1 },
      { clickMax: 1 },
      { clickMax: 1 },
      { clickMax: 1 },
      { clickMax: 1 },
      { clickMax: 2 },
      { clickMax: 2 },
      { clickMax: 2 },
      { clickMax: 2 },
    ],
  },
  // Stage 2
  {
    levels: [
      { clickMax: 1 },
      { clickMax: 1 },
      { clickMax: 1 },
      { clickMax: 1 },
      { clickMax: 1 },
      { clickMax: 1 },
      { clickMax: 2 },
      { clickMax: 2 },
      { clickMax: 2 },
      { clickMax: 2 },
    ],
  },
  // Stage 3
  {
    levels: [
      { clickMax: 2 },
      { clickMax: 2 },
      { clickMax: 2 },
      { clickMax: 2 },
      { clickMax: 2 },
      { clickMax: 2 },
      { clickMax: 4 },
      { clickMax: 2 },
      { clickMax: 2 },
      { clickMax: 2 },
    ],
  },
  // Stage 4
  {
    levels: [
      { clickMax: 1 },
      { clickMax: 1 },
      { clickMax: 4 },
      { clickMax: 4 },
      { clickMax: 4 },
      { clickMax: 4 },
      { clickMax: 2 },
      { clickMax: 4 },
      { clickMax: 4 },
      { clickMax: 6 },
    ],
  },
  // Stage 5
  {
    levels: [
      { clickMax: 4 },
      { clickMax: 6 },
      { clickMax: 6 },
      { clickMax: 6 },
      { clickMax: 1 },
      { clickMax: 1 },
      { clickMax: 2 },
      { clickMax: 2 },
      { clickMax: 1 },
      { clickMax: 1 },
    ],
  },
  // Stage 6
  {
    levels: [
      { clickMax: 2 }, // done
      { clickMax: 2 }, // done
      { clickMax: 4 }, // done
      { clickMax: 1 }, // done
      { clickMax: 1 }, // done
      { clickMax: 2 }, // done
      { clickMax: 1 }, // done
      { clickMax: 1 }, // done
      { clickMax: 3 }, // done
      { clickMax: 3 }, // done
    ],
  },
  // Stage 7
  {
    levels: [
      { clickMax: 1 },
      { clickMax: 2 },
      { clickMax: 3 },
      { clickMax: 4 },
      { clickMax: 4 },
      { clickMax: 4 },
      { clickMax: 4 },
      { clickMax: 1 },
      { clickMax: 1 },
      { clickMax: 1 },
    ],
  },
  // Stage 8
  {
    levels: [
      { clickMax: 2 },
      { clickMax: 2 },
      { clickMax: 4 },
      { clickMax: 4 },
      { clickMax: 3 },
      { clickMax: 5 },
      { clickMax: 3 },
      { clickMax: 4 },
      { clickMax: 6 }, // corrected to 6 clicks on Feb 2021
      { clickMax: 3 },
    ],
  },
  // Stage 9
  {
    levels: [
      { clickMax: 2 }, // done
      { clickMax: 6 }, // done
      { clickMax: 1 }, // done
      { clickMax: 1 }, // done
      { clickMax: 4 }, // done
      { clickMax: 4 }, // done
      { clickMax: 3 }, // done
      { clickMax: 1 }, // done
      { clickMax: 2 }, // done
      { clickMax: 6 }, // done
    ],
  },
  // Stage 10
  {
    levels: [
      { clickMax: 1 },
      { clickMax: 3 },
      { clickMax: 5 },
      { clickMax: 7 },
      { clickMax: 1 },
      { clickMax: 2 },
      { clickMax: 2 },
      { clickMax: 1 },
      { clickMax: 3 },
      { clickMax: 6 },
    ],
  },
  // Stage 11
  {
    levels: [
      { clickMax: 3 },
      { clickMax: 4 },
      { clickMax: 3 },
      { clickMax: 5 },
      { clickMax: 3 },
      { clickMax: 3 },
      { clickMax: 6 },
      { clickMax: 1 },
      { clickMax: 2 },
      { clickMax: 2 },
    ],
  },
  // Stage 12
  {
    levels: [
      { clickMax: 4 }, // done
      { clickMax: 7 }, // done
      { clickMax: 1 }, // done
      { clickMax: 2 }, // done
      { clickMax: 3 }, // done
      { clickMax: 6 }, // done
      { clickMax: 2 }, // done
      { clickMax: 4 }, // done
      { clickMax: 6 }, // done
      { clickMax: 3 }, // done
    ],
  },
];

export default scoreData;
