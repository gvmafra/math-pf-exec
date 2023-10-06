import { Stage } from '../types';
import {
  initializeLevels,
  initializeLevelChallenges,
  initialStageMetadata,
} from './utils';

const genStageOne = (): Stage => ({
  levels: initializeLevels(

    // below are the 10 challenges for stage 1
    initializeLevelChallenges([
      {
        challengeId: 'Square2a',
        toggles: [false, true],
      },
      {
        challengeId: 'Square2b',
        toggles: [true, false],
      },
      {
        challengeId: 'Square2d',
        toggles: [true, false],
      },
      {
        challengeId: 'Circle2b',
        toggles: [true, false],
      },
      {
        challengeId: 'Diamond2b',
        toggles: [true, false],
      },
      {
        challengeId: 'Triangle2b',
        toggles: [true, false],
      },
      {
        challengeId: 'Square2a',
        toggles: [false, true],
      },
      {
        challengeId: 'Square2b',
        toggles: [true, false],
      },
      {
        challengeId: 'Diamond2a',
        toggles: [false, true],
      },
      {
        challengeId: 'Triangle2a',
        toggles: [true, false],
      },
    ]),

    // below are the 10 canvases for stage 1
    initializeLevelChallenges([
      { challengeId: 'Square2a' },
      { challengeId: 'Square2a' },
      { challengeId: 'Square2a' },
      { challengeId: 'Square2a' },
      { challengeId: 'Square2a' },
      { challengeId: 'Square2a' },
      { challengeId: 'Square4c' },
      { challengeId: 'Square4c' },
      { challengeId: 'Square4c' },
      { challengeId: 'Square4c' },
    ])
  ),
  metadata: initialStageMetadata(),
});

export default genStageOne;
