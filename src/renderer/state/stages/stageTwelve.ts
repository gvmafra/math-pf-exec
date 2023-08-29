import { ChallengeCanvas, GameCanvas, Stage } from '../types';
import {
  initializeLevels,
  initializeLevelChallenges,
  filterChallenges,
  concatArrays,
  initialStageMetadata,
  genRandomChallengeCanvases,
  getRandomOptions,
} from './utils';

const genStageSix = (): Stage => {
  return {
    levels: initializeLevels(

      // array containing the challenges above
      concatArrays<ChallengeCanvas>([
        genRandomChallengeCanvases({
          numCellsFilter: [3, 6, 9],
          difficultyFilter: ['easy', 'medium', 'hard'],
          toggleRatio: .5,
          numberofChallenges: 5,
        }),
        genRandomChallengeCanvases({
          numCellsFilter: [3, 6, 9],
          difficultyFilter: ['easy', 'medium', 'hard'],
          toggleRatio: .5,
          numberofChallenges: 5,
        }),
      ]),
      

      // array containing the canvas below
      concatArrays<GameCanvas>([
        initializeLevelChallenges(
          getRandomOptions(
            filterChallenges({
              numCellsFilter: [3, 6, 2],
              difficultyFilter: ['easy'],
            }).map((challengeId) => ({
              challengeId,
            })),
            6
          )
        ),
        initializeLevelChallenges([
          { challengeId: 'Square3b' },
          { challengeId: 'Square3b' },
          { challengeId: 'Square3b' },
          { challengeId: 'Square3b' },
        ]),
      ])

    ),
    metadata: initialStageMetadata(),
  };
};

export default genStageSix;
