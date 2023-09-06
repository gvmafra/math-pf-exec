import { GameCanvas, Stage } from '../types';
import {
  initializeLevels,
  initializeLevelChallenges,
  filterChallenges,
  concatArrays,
  initialStageMetadata,
  genRandomChallengeCanvases,
  getRandomOptions,
} from './utils';

const genStageTwelve = (): Stage => {
  const stages = [
    { numCellsFilter: [9], numberOfLevels: 2 },
    { numCellsFilter: [9, 3], numberOfLevels: 2 },
    { numCellsFilter: [3, 9], numberOfLevels: 2 },
    { numCellsFilter: [9, 6], numberOfLevels: 2 },
    { numCellsFilter: [6, 9], numberOfLevels: 2 },
  ];
  
  const difficultyFilter = ['easy', 'medium', 'hard'];

  let levels = [];
  
  stages.forEach(stage => {
    let generatedLevels = initializeLevels(
      genRandomChallengeCanvases({
        numCellsFilter: stage.numCellsFilter,
        difficultyFilter: difficultyFilter,
        toggleRatio: .5,
        numberofChallenges: stage.numberOfLevels,
      }),
      concatArrays<GameCanvas>([
        initializeLevelChallenges(
          getRandomOptions(
            filterChallenges({
              numCellsFilter: stage.numCellsFilter,
              difficultyFilter: difficultyFilter,
            }).map((challengeId) => ({
              challengeId,
            })),
            stage.numberOfLevels
          )
        )
      ])
    );

    levels = [...levels, ...generatedLevels];
  });

  return {
    levels,
    metadata: initialStageMetadata(),
  };
};

export default genStageTwelve;


/* 
* stageTwelve.ts consists of the following:

* Levels 1 and 2 will be:
*   challenge: random /9s, easy medium and hard
*   canvas: random /9s, easy medium and hard

* Levels 3 and 4 will be:
*   challenge: random /9s, easy medium and hard
*   canvas: random /3s, easy medium and hard

* Levels 5 and 6 will be:
*   challenge: random /3s, easy medium and hard
*   canvas: random /9s, easy medium and hard

* Levels 7 and 8 will be:
*   challenge: random /9s, easy medium and hard
*   canvas: random /6s, easy medium and hard

* Levels 9 and 10 will be:
*   challenge: random /6s, easy medium and hard
*   canvas: random /9s, easy medium and hard

* need to use the following functions:
*    - genRandomChallengeCanvases
*    - getRandomOptions
*    - filterChallenges
*    - concatArrays
*    - initializeLevels
*    - initializeLevelChallenges
*    - initialStageMetadata
*/

/*

This issue can be solved by imposing a restriction during the canvas generation phase so that it generates a canvas with at least equal or more cells compared to the challenge. We add a check to ensure that the number of cells in the produced canvas is always more than or equal to the toggled cells number in the challenge.

You could modify `genRandomChallengeCanvases` to check and regenerate a canvas if the number of cells it contains is less than the maximum number of toggles specified in any challenge.

Here's a general example of how you could modify the function:

```typescript
function genRandomChallengeCanvases({ numCellsFilter, difficultyFilter, toggleRatio, numberOfChallenges }) {
  store challenges in an temporary array
  let challenges = [];

  for (let i = 0; i < numberOfChallenges; i++) {
    let challenge, canvas;

    do {
      challenge = generateRandomChallenge({ numCellsFilter, difficultyFilter });
      canvas = generateCanvas({ numCells: challenge.toggles * toggleRatio });

      // If the generated canvas doesn't have enough cells, generate another.
      if (canvas.numCells < challenge.toggles) {
        continue;
      }

      // If the canvas has enough cells, we create the challenge.
      challenges.push({
        challenge,
        canvas
      })
    } while (challenge.toggles > canvas.numCells)
  }

  return challenges;
}
```

Here, the inner do...while loop ensures that we keep generating a new canvas until the number of cells it contains is equal to or greater than the number of toggles our challenge specifies.

Please adapt this code snippet depending on your actual function definitions and TypeScript types.

*/