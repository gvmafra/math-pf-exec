import { Challenge, ShapeIds } from './types';

export type challengeDetailsMap = Record<ShapeIds, Challenge>;

export const challenges: challengeDetailsMap = {
  Square2a: {
    shape: 'square',
    letter: 'a',
    difficulty: 'easy',
    numCells: 2,
    paths: ['M10 10h80v40H10Z', 'M10 50h80v40H10Z'],
  },
  Square2b: {
    shape: 'square',
    letter: 'b',
    difficulty: 'easy',
    numCells: 2,
    paths: ['M10 10h40v80H10Z', 'M50 10h40v80H50Z'],
  },
  Square2c: {
    shape: 'square',
    letter: 'c',
    difficulty: 'easy',
    numCells: 2,
    paths: ['M90 10L10 10L90 90L90 10z', 'M10 90L90 90L10 10L10 90z'],
  },
  Square2d: {
    shape: 'square',
    letter: 'd',
    difficulty: 'easy',
    numCells: 2,
    paths: [
      'M10.8 10L10.8 90L90.8 10L10.8 10z',
      'M90.8 90L90.8 10L10.8 90L90.8 90z',
    ],
  },
  Square2e: {
    shape: 'square',
    letter: 'e',
    difficulty: 'medium',
    numCells: 2,
    paths: [
      'M90 63.3L50 63.3L50 36.7L10 36.7L10 10L90 10L90 63.3z',
      'M10 36.7L50 36.7L50 63.3L90 63.3L90 90L10 90L10 36.7z',
    ],
  },
  Square2f: {
    shape: 'square',
    letter: 'f',
    difficulty: 'medium',
    numCells: 2,
    paths: [
      'M10 10L59.1 10L40.9 36.7L59.1 63.3L40.9 90L10 90L10 10z',
      'M90 90L40.9 90L59.1 63.3L40.9 36.7L59.1 10L90 10L90 90z',
    ],
  },
  Square2g: {
    shape: 'square',
    letter: 'g',
    difficulty: 'medium',
    numCells: 2,
    paths: [
      'M36.67 90L36.67 50L63.33 50L63.33 10L90 10L90 90L36.67 90z',
      'M63.33 10L63.33 50L36.67 50L36.67 90L10 90L10 10L63.33 10z',
    ],
  },
  Square3a: {
    shape: 'square',
    letter: 'a',
    difficulty: 'easy',
    numCells: 3,
    paths: [
      'M10 10h26.7v80H10Z',
      'M36.7 10h26.7v80H36.7Z',
      'M63.3 10h26.7v80H63.3Z',
    ],
  },
  Square3b: {
    shape: 'square',
    letter: 'b',
    difficulty: 'easy',
    numCells: 3,
    paths: [
      'M10,10h80v26.7H10V10z',
      'M10,36.7h80v26.7H10V36.7z',
      'M10,63.3h80V90H10V63.3z',
    ],
  },
  Square4a: {
    shape: 'square',
    letter: 'a',
    difficulty: 'easy',
    numCells: 4,
    paths: [
      'M90,10v20H10V10H90z',
      'M90,30v20H10V30H90z',
      'M90,50v20H10V50H90z',
      'M90,70v20H10V70H90z',
    ],
  },
  Square4b: {
    shape: 'square',
    letter: 'b',
    difficulty: 'easy',
    numCells: 4,
    paths: [
      'M70,90H50V10h20V90z',
      'M90,90H70V10h20V90z',
      'M50,90H30V10h20V90z',
      'M30,90H10V10h20V90z',
    ],
  },
  Square4c: {
    shape: 'square',
    letter: 'c',
    difficulty: 'easy',
    numCells: 4,
    paths: [
      'M10 10h40v40H10Z',
      'M50 10h40v40H50Z',
      'M10 50h40v40H10Z',
      'M50 50h40v40H50Z',
    ],
  },
  Square4d: {
    shape: 'square',
    letter: 'd',
    difficulty: 'easy',
    numCells: 4,
    paths: [
      'M90,90H10l40-40L90,90z',
      'M10,90V10l40,40L10,90z',
      'M10,10h80L50,50L10,10z',
      'M90,10v80L50,50L90,10z',
    ],
  },
  Square4e: {
    shape: 'square',
    letter: 'e',
    difficulty: 'medium',
    numCells: 4,
    paths: [
      'M10,90l40-80H10V90z',
      'M50,90V10L10,90H50z',
      'M50,90V10l40,80C90,90,50,90,50,90z',
      'M90,90L50,10h40V90L90,90z',
    ],
  },
  Square4g: {
    shape: 'square',
    letter: 'g',
    difficulty: 'hard',
    numCells: 4,
    paths: [
      'M10,90l40-80H10V90z',
      'M50,10L10,90h40V10z',
      'M50,90l40-80H50V90z',
      'M90,10L50,90h40V10z',
    ],
  },
  Square4h: {
    shape: 'square',
    letter: 'h',
    difficulty: 'hard',
    numCells: 4,
    paths: [
      'M30.1,30.1v39.8h20V10L10,10.2v19.9H30.1z',
      'M50,69.9H30V30.1H10V90l39.9-0.2L50,69.9L50,69.9z',
      'M90.1,30.1H69.9v39.8h-20V10L90,10.2L90.1,30.1L90.1,30.1z',
      'M50,69.9h20V30.1h20V90l-39.9-0.2L50,69.9L50,69.9z',
    ],
  },
  Square6a: {
    shape: 'square',
    letter: 'a',
    difficulty: 'easy',
    numCells: 6,
    paths: [
      'M10.1,10h26.7v40H10.1V10z',
      'M36.7,10h26.7v40H36.7V10z',
      'M63.3,10.1H90v40H63.3V10.1z',
      'M10,50h26.7v40H10V50z',
      'M36.7,50h26.7v40H36.7V50z',
      'M63.3,50H90v40H63.3V50z',
    ],
  },
  Square6b: {
    shape: 'square',
    letter: 'b',
    difficulty: 'easy',
    numCells: 6,
    paths: [
      'M10,10h40v26.7H10V10z',
      'M10,36.7h40v26.7H10V36.7z',
      'M10,63.3h40V90H10V63.3z',
      'M50,10h40v26.7H50V10z',
      'M50,36.7h40v26.7H50V36.7z',
      'M50,63.3h40V90H50V63.3z',
    ],
  },
  Square8a: {
    shape: 'square',
    letter: 'a',
    difficulty: 'easy',
    numCells: 8,
    paths: [
      'M10,10h40v20H10V10z',
      'M10,30h40v20H10V30z',
      'M10,50h40v20H10V50z',
      'M10,70h40v20H10V70z',
      'M50,10h40v20H50V10z',
      'M50,30h40v20H50V30z',
      'M50,50h40v20H50V50z',
      'M50,70h40v20H50V70z',
    ],
  },
  Square8b: {
    shape: 'square',
    letter: 'b',
    difficulty: 'easy',
    numCells: 8,
    paths: [
      'M10,10h20v40H10V10z',
      'M30,10h20v40H30V10z',
      'M50,10h20v40H50V10z',
      'M70,10h20v40H70V10z',
      'M10,50h20v40H10V50z',
      'M30,50h20v40H30V50z',
      'M50,50h20v40H50V50z',
      'M70,50h20v40H70V50z',
    ],
  },
  Square8c: {
    shape: 'square',
    letter: 'c',
    difficulty: 'easy',
    numCells: 8,
    paths: [
      'M90,10L50,50V10h40Z',
      'M90,50H50L90,10V50Z',
      'M50,90V50l40,40H50Z',
      'M90,90L50,50h40v40Z',
      'M50,10V50L10,10H50Z',
      'M10,10L50,50H10V10Z',
      'M10,90L50,50v40H10Z',
      'M10,50H50L10,90V50Z',
    ],
  },
  Square8e: {
    shape: 'square',
    letter: 'e',
    difficulty: 'medium',
    numCells: 8,
    paths: [
      'M10,10h40L10,50V10z',
      'M50,50H10l40-40V50z',
      'M50,50V10l40,40H50z',
      'M90,10v40L50,10H90z',
      'M10,90V50l40,40H10z',
      'M50,50v40L10,50H50z',
      'M50,50h40L50,90V50z',
      'M90,90H50l40-40V90z',
    ],
  },
  Square8g: {
    shape: 'square',
    letter: 'g',
    difficulty: 'hard',
    numCells: 8,
    paths: [
      'M10.1,10L30,89.8H10V10H10.1z',
      'M30.1,89.8L10.2,10h20v79.8H30.1z',
      'M50,10L30.1,89.8h20L50,10L50,10z',
      'M30,89.8L50,10H29.9v79.8H30z',
      'M50,10l19.9,79.8h-20L50,10L50,10z',
      'M70,89.8L50,10h20V89.8z',
      'M89.9,10L70,89.8h20L89.9,10L89.9,10z',
      'M70,89.8L89.9,10h-20L70,89.8L70,89.8z',
    ],
  },
  Square8h: {
    shape: 'square',
    letter: 'h',
    difficulty: 'hard',
    numCells: 8,
    paths: [
      'M10,10h39.9L30,50L10,10z',
      'M10,10l20,40L10,89.9V10z',
      'M89.9,10l-20,40l20,40V10z',
      'M50.1,10H90L70.1,50L50.1,10z',
      'M50,10L30,50l20,40V10z',
      'M50,10l20,40L50,90V10z',
      'M10,90h39.9L30,50L10,90z',
      'M50.1,90H90L70.1,50L50.1,90z',
    ],
  },
  Square8i: {
    shape: 'square',
    letter: 'i',
    difficulty: 'hard',
    numCells: 8,
    paths: [
      'M10,10.1h40v20H10V10.1z',
      'M30,30.1h40v20H30V30.1z',
      'M30,50h40v20H30V50z',
      'M10,70h40v20H10V70z',
      'M50,70h40v20H50V70z',
      'M50,10.1h40v20H50V10.1z',
      'M10,30.1h20v40H10V30.1z',
      'M70,30.1h20v40H70V30.1z',
    ],
  },
  Square8j: {
    shape: 'square',
    letter: 'j',
    difficulty: 'hard',
    numCells: 8,
    paths: [
      'M70,10h20v40H70V10z',
      'M70,50h20v40H70V50z',
      'M30,10h40v20H30V10z',
      'M30,30h40v20H30V30z',
      'M30,50h40v20H30V50z',
      'M30,70h40v20H30V70z',
      'M10,10h20v40H10V10z',
      'M10,50h20v40H10V50z',
    ],
  },
  Square9a: {
    shape: 'square',
    letter: 'a',
    difficulty: 'easy',
    numCells: 9,
    paths: [
      'M10,10h26.7v26.7H10V10z',
      'M36.7,10h26.7v26.7H36.7V10z',
      'M63.3,10h26.7v26.7H63.3V10z',
      'M10,36.7h26.7v26.7H10V36.7z',
      'M36.7,36.7h26.7v26.7H36.7V36.7z',
      'M63.3,36.7h26.7v26.7H63.3V36.7z',
      'M10,63.4h26.7v26.7H10V63.4z',
      'M36.7,63.4h26.7v26.7H36.7V63.4z',
      'M63.4,63.4h26.7v26.7H63.4V63.4z',
    ],
  },

  Circle2a: {
    shape: 'circle',
    letter: 'a',
    difficulty: 'easy',
    numCells: 2,
    paths: [
      'M5,50c0,24.9,20.1,45,45,45V5C25.1,5,5,25.1,5,50Z',
      'M95,50c0,24.9-20.1,45-45,45V5c24.9,0,45,20.1,45,45Z',
    ],
  },
  Circle2b: {
    shape: 'circle',
    letter: 'b',
    difficulty: 'easy',
    numCells: 2,
    paths: [
      'M50,5c24.9,0,45,20.1,45,45H5C5,25.1,25.1,5,50,5Z',
      'M50,95c24.9,0,45-20.1,45-45H5c0,24.9,20.1,45,45,45Z',
    ],
  },
  Circle2c: {
    shape: 'circle',
    letter: 'c',
    difficulty: 'medium',
    numCells: 2,
    paths: [
      'M19.6,19.5c-16.8,16.8-16.8,44.1,0,60.9L80.4,19.5c-16.8-16.8-44-16.8-60.8,0Z',
      'M80.4,80.5c16.8-16.8,16.8-44.1,0-60.9L19.6,80.5c16.8,16.8,44,16.8,60.8,0Z',
    ],
  },
  Circle2d: {
    shape: 'circle',
    letter: 'd',
    difficulty: 'medium',
    numCells: 2,
    paths: [
      'M19.6,80.4c-16.8-16.8-16.8-44,0-60.8l60.8,60.8C63.6,97.2,36.4,97.2,19.6,80.4z',
      'M80.4,19.6c-16.8-16.8-44-16.8-60.8,0l60.8,60.8C97.2,63.6,97.2,36.4,80.4,19.6z',
    ],
  },
  Circle2e: {
    shape: 'circle',
    letter: 'e',
    difficulty: 'medium',
    numCells: 2,
    paths: [
      'M39,8.5c22.8-6.2,46.3,7.4,52.5,30.4c6.1,22.9-7.4,46.5-30.3,52.6l0,0c0,0-0.1,0-0.2,0h-0.1c4.3-1,14.2-6,15.8-17.6c1.6-12-6.5-20-12-22.4c-4.4-1.9-8.2-2.9-14.9-1.4c-5.7,1.2-14.9,1.3-21.6-6.7c-6.7-7.9-6.4-17.2-2.6-24.5c2.9-5.6,7.8-8.4,10.7-9.5C37.2,9,38.1,8.7,39,8.5C39,8.5,39,8.5,39,8.5z',
      'M61,91.5c-22.8,6.2-46.3-7.4-52.5-30.4C2.3,38.2,15.9,14.7,38.8,8.5l0,0c0,0,0.1,0,0.2,0h0.1c-4.3,1-14.2,6-15.8,17.6c-1.6,12,6.5,20,12,22.4c4.4,1.9,8.2,2.9,14.9,1.4c5.7-1.2,14.9-1.3,21.6,6.7c6.7,7.9,6.4,17.2,2.6,24.5c-2.9,5.6-7.8,8.4-10.7,9.5C62.8,91,61.9,91.3,61,91.5C61,91.5,61,91.5,61,91.5z',
    ],
  },
  Circle2f: {
    shape: 'circle',
    letter: 'e',
    difficulty: 'medium',
    numCells: 2,
    paths: [
      'M49.8,50c0-28.6,41.8-29.1,43.2-1.4-.8-23.1-19.7-41.6-43-41.6S7,26.3,7,50s0,1,0,1.4c1.4,27.6,42.8,27.1,42.8-1.4Z',
      'M50,93c23.7,0,43-19.3,43-43,0-29.1-43.2-29-43.2,0,0,29-42.8,29.1-42.8,0,0,23.7,19.2,43,43,43Z',
    ],
  },
  Circle3a: {
    shape: 'circle',
    letter: 'a',
    difficulty: 'easy',
    numCells: 3,
    paths: [
      'M12.8,71.7L12.8,71.7c-0.7-1.1-1.2-2.2-1.8-3.4c-0.2-0.3-0.3-0.7-0.4-1c-0.3-0.8-0.6-1.5-0.9-2.3C4.5,50.8,7,34.6,16.9,22.6C24.1,14,34.5,8.5,45.5,7.3c1,0,2-0.2,3.1-0.3H50v43.1L12.8,71.7z',
      'M42.6,92.3c-12.5-2.2-23.4-9.7-29.8-20.7L50,50l37.2,21.5C78.2,87.1,60.3,95.5,42.6,92.3L42.6,92.3z',
      'M90.4,35.4c4.3,11.9,3.2,25.2-3.2,36.1L50,50V6.9C68.1,6.9,84.2,18.5,90.4,35.4C90.4,35.4,90.4,35.4,90.4,35.4z',
    ],
  },
  Circle3b: {
    shape: 'circle',
    letter: 'b',
    difficulty: 'easy',
    numCells: 3,
    paths: [
      'M90.4,64.5c4.3-11.9,3.2-25.1-3.2-36.1l-37.2,21.5v43.1c18.1,0,34.2-11.5,40.4-28.5h0Z',
      'M12.8,28.3h0c-.7,1.1-1.2,2.2-1.8,3.4-.2,.3-.3,.7-.4,1-.3,.8-.6,1.5-.9,2.3-5.2,14.2-2.7,30.4,7.2,42.3,7.2,8.6,17.6,14.1,28.6,15.3,1,0,2,.2,3.1,.3h1.4V49.9L12.8,28.3Z',
      'M42.6,7.6c-12.5,2.2-23.4,9.7-29.8,20.7l37.2,21.6,37.2-21.5C78.2,12.8,60.3,4.6,42.6,7.6h0Z',
    ],
  },
  Circle3c: {
    shape: 'circle',
    letter: 'c',
    difficulty: 'medium',
    numCells: 3,
    paths: [
      'M50.1,7c-15.4,0-29.6,8.1-37.3,21.5h0c-7.7,13.3-7.7,29.7,0,43.1,2.7-6.1,6.4-11.8,13.1-16.2,8.3-5.4,16.5-6.5,24.2-5.3,0,0,8.8-9.1,7.7-24.2-.7-9.4-5.1-16.1-7.6-18.9h0Z',
      'M43.9,49.4c-4.7,0-11.7,1.2-18.8,5.9-7.7,5.3-11.4,12.5-12.5,16,7.6,13.3,21.8,21.5,37.3,21.6,15.4,0,29.6-8.1,37.3-21.5-6.6,.7-13.5,.4-20.6-3.2-8.9-4.5-13.9-11-16.6-18.3,0,0-.2,.2-.5,.6,.1-.2,.3-.4,.4-.6,0,0-2.3-.6-6-.6h0Z',
      'M50.1,7c3.9,5.3,7,11.4,7.5,19.5,.6,10-2.6,17.6-7.5,23.5,0,0,3.4,12.2,17.1,18.8,8.4,4.1,16.5,3.6,20.1,2.8,7.7-13.3,7.7-29.7,0-43.1h0c-7.6-13.3-21.8-21.5-37.2-21.5h0Z',
    ],
  },
  Circle4a: {
    shape: 'circle',
    letter: 'a',
    difficulty: 'easy',
    numCells: 4,
    paths: [
      'M50,50V7C26.2,7,7,26.3,7,50H50Z',
      'M50,50h43c0-23.8-19.2-43.1-43-43V50Z',
      'M50,50H7c0,23.8,19.2,43.1,43,43V50Z',
      'M50,50v43c23.7,0,43-19.3,43-43.1H50Z',
    ],
  },
  Circle4c: {
    shape: 'circle',
    letter: 'c',
    difficulty: 'medium',
    numCells: 4,
    paths: [
      'M19.6,19.6l30.4,30.4,30.4-30.4c-16.8-16.8-44-16.8-60.8,0Z',
      'M19.6,19.6l30.4,30.4-30.4,30.4c-16.8-16.8-16.8-44,0-60.8Z',
      'M80.4,80.4l-30.4-30.4,30.4-30.4c16.8,16.8,16.8,44,0,60.8Z',
      'M80.4,80.4l-30.4-30.4-30.4,30.4c16.8,16.8,44,16.8,60.8,0Z',
    ],
  },
  Circle4g: {
    shape: 'circle',
    letter: 'g',
    difficulty: 'hard',
    numCells: 4,
    paths: [
      'M37.8,8.8h-.2c0,0,0,.1,0,.1,4.2-1.5,15.3-2.3,22.7,6.7,7.7,9.3,5.1,20.4,1.6,25.4-2.8,4-5.4,6.7-11.8,9v.2c.4,.9,.8,1.9,1.3,3h0c.1,.2,.2,.4,.3,.6,.1,.3,.3,.5,.4,.8h0c.2,.5,.4,.9,.7,1.3h0c2.7,4.2,7.2,8.2,14.4,9.3,10.3,1.6,18-3.7,22.2-10.6,3.3-5.5,3-11,2.4-14.2-.4-1.8-.9-3.8-1.4-5.3C82.5,13.7,59.4,2.3,37.8,8.8h0Z',
      'M91.2,37.8v-.2c0,0-.1,0-.1,0,1.5,4.2,2.3,15.3-6.7,22.7-9.3,7.7-20.4,5.1-25.4,1.6-4-2.8-6.7-5.4-9-11.8h-.2c-.9,.4-1.9,.8-3,1.3h0c-.2,.1-.4,.2-.6,.3-.3,.1-.5,.3-.8,.4h-.1c-.4,.3-.8,.5-1.1,.7h0c-4.2,2.7-8.2,7.2-9.3,14.4-1.6,10.3,3.7,18,10.6,22.2,5.5,3.2,11,3,14.2,2.4,1.8-.4,3.8-.9,5.3-1.4,21.4-7.9,32.9-31,26.3-52.7h0Z',
      'M62.3,91.2h.2c0,0,0-.1,0-.1-4.2,1.5-15.3,2.3-22.7-6.7-7.7-9.3-5.1-20.4-1.6-25.4,2.8-4,5.4-6.7,11.8-9v-.2c-.4-.9-.8-1.9-1.3-3h0c-.1-.2-.2-.4-.3-.6-.1-.3-.3-.5-.4-.8h0c-.2-.5-.4-.9-.7-1.3h0c-2.7-4.2-7.2-8.2-14.4-9.3-10.3-1.6-18,3.7-22.2,10.6-3.3,5.5-3,11-2.4,14.2,.4,1.8,.9,3.8,1.4,5.3,7.9,21.4,30.9,32.9,52.7,26.3h0Z',
      'M8.8,62.2v.2c0,0,.1,0,.1,0-1.5-4.2-2.3-15.3,6.7-22.7,9.3-7.7,20.4-5.1,25.4-1.6,4,2.8,6.7,5.4,9,11.8h.2c.9-.4,1.9-.8,3-1.3h0c.2-.1,.4-.2,.6-.3,.3-.1,.5-.3,.8-.4h.1c.4-.3,.8-.5,1.1-.7h0c4.2-2.7,8.2-7.2,9.3-14.4,1.6-10.3-3.7-18-10.6-22.2-5.5-3.2-11-3-14.2-2.4-1.8,.4-3.8,.9-5.3,1.4C13.7,17.5,2.3,40.5,8.8,62.2h0Z',
    ],
  },
  Circle6c: {
    shape: 'circle',
    letter: 'c',
    difficulty: 'medium',
    numCells: 6,
    paths: [
      'M87.2,28.5L50,50V7C65.4,7,79.5,15.2,87.2,28.5L87.2,28.5z',
      'M87.2,28.6L50,50l37.2,21.5C94.9,58.2,94.9,41.8,87.2,28.6C87.2,28.6,87.2,28.6,87.2,28.6z',
      'M50,92.8V50l37.3,21.5C79.6,84.8,65.3,92.8,50,92.8C50,92.8,50,92.8,50,92.8z',
      'M50,92.9V50L12.8,71.6C20.5,84.9,34.6,92.9,50,92.9L50,92.9z',
      'M12.8,71.4L50,50L12.8,28.4C5.1,41.7,5.1,58,12.8,71.4L12.8,71.4L12.8,71.4z',
      'M50,7.1V50L12.7,28.6C20.4,15.3,34.6,7.1,50,7.1L50,7.1z',
    ],
  },
  Circle6g: {
    shape: 'circle',
    letter: 'g',
    difficulty: 'hard',
    numCells: 6,
    paths: [
      'M50.1,7c-15.4,0-29.6,8.2-37.3,21.4,6.6-.7,13.4-.4,20.6,3.2,8.9,4.5,13.9,11,16.6,18.3,0,0,8.8-9,7.7-24.1-.7-9.3-5.2-16.1-7.7-18.8h0Z',
      'M12.8,28.4c-7.7,13.3-7.7,29.7-.1,43,2.7-6.1,6.4-11.8,13.1-16.2,8.3-5.4,16.5-6.5,24.2-5.3,0,0-3.4-12.1-17.1-18.8-8.4-4-16.5-3.6-20.1-2.8h0Z',
      'M12.7,71.4c7.7,13.3,21.8,21.6,37.2,21.6-3.9-5.3-7-11.4-7.5-19.4-.5-10,2.6-17.5,7.6-23.6,0,0-12.2-3.1-24.8,5.4-7.8,5.2-11.5,12.5-12.6,16Z',
      'M49.9,93c15.4,0,29.6-8.2,37.3-21.4-6.6,.7-13.4,.4-20.6-3.2-8.9-4.5-13.9-11-16.6-18.3,0,0-8.8,9-7.7,24.1,.7,9.3,5.2,16.1,7.7,18.8h0Z',
      'M87.2,71.6c7.7-13.3,7.7-29.7,.1-43-2.7,6.1-6.4,11.8-13.1,16.2-8.3,5.4-16.5,6.5-24.2,5.3,0,0,3.4,12.1,17.1,18.8,8.4,4,16.5,3.5,20.1,2.8h0Z',
      'M87.3,28.6c-7.7-13.3-21.8-21.6-37.2-21.6,3.9,5.3,7,11.4,7.5,19.4,.5,10-2.6,17.5-7.6,23.6,0,0,12.2,3.1,24.8-5.4,7.8-5.2,11.5-12.5,12.6-16Z',
    ],
  },
  Circle8c: {
    shape: 'circle',
    letter: 'c',
    difficulty: 'medium',
    numCells: 8,
    paths: [
      'M50,7c11.4,0,22.4,4.5,30.4,12.6l-30.4,30.4V7q0,0,0,0Z', //
      'M80.4,19.6c8.1,8.1,12.6,19,12.6,30.4H50l30.5-30.4h0Z', //
      'M80.4,80.4c8.1-8.1,12.6-19,12.6-30.4H50l30.5,30.4h0Z', //
      'M50,93c11.4,0,22.4-4.5,30.4-12.6l-30.4-30.4v42.9q0,0,0,0Z', //
      'M50,93c-11.4,0-22.4-4.5-30.4-12.6l30.4-30.4v42.9h0Z', //
      'M19.6,80.4c-8.1-8.1-12.6-19-12.6-30.4H50l-30.5,30.4h0Z', //
      'M19.6,19.6c-8.1,8.1-12.6,19-12.6,30.4H50L19.6,19.6h0Z', //
      'M50,7c-11.4,0-22.4,4.5-30.4,12.6l30.4,30.4V7h0Z', //
    ],
  },
  Circle9g: {
    shape: 'circle',
    letter: 'g',
    difficulty: 'hard',
    numCells: 9,
    paths: [
      'M49.2,7l.8,43,27-33.5c-5.1-4.2-11.3-7.2-18.2-8.6-3.2-.7-6.4-.9-9.6-.9Z',
      'M77,16.5l-27,33.5,42.2-8.3c-2-9.9-7.4-18.9-15.2-25.2Z',
      'M92.2,41.7l-42.2,8.3,37.7,20.8c2-3.7,3.5-7.7,4.4-12s1.2-11.6,0-17Z',
      'M50,50l15.5,40.1c9.3-3.6,17.2-10.4,22.2-19.3l-37.7-20.8Z',
      'M65.5,90.1l-15.5-40.1-13.9,40.7c1.7,.6,3.4,1.1,5.2,1.4,8.4,1.7,16.8,.9,24.2-2Z',
      'M13.2,72.2c5.1,8.4,13.1,15.1,22.9,18.5l13.9-40.7L13.2,72.2Z',
      'M50,50L7.5,43.4c-1.6,10.3,.6,20.5,5.7,28.9l36.8-22.2Z',
      'M21.7,17.6c-6.8,6-11.8,14.1-13.8,23.6-.1,.7-.3,1.4-.4,2.1l42.5,6.6L21.7,17.6Z',
      'M50,50l-.8-43c-10.3,.2-19.9,4.1-27.4,10.6l28.3,32.4Z',
    ],
  },

  Diamond2a: {
    shape: 'diamond',
    letter: 'a',
    difficulty: 'easy',
    numCells: 2,
    paths: ['M50,93.3L6.7,50h86.5L50,93.3z', 'M50,6.7L93.3,50H6.7L50,6.7z'],
  },
  Diamond2b: {
    shape: 'diamond',
    letter: 'b',
    difficulty: 'easy',
    numCells: 2,
    paths: ['M93.3,50L50,93.3V6.7L93.3,50z', 'M6.7,50L50,6.7v86.5L6.7,50z'],
  },
  Diamond2c: {
    shape: 'diamond',
    letter: 'c',
    difficulty: 'medium',
    numCells: 2,
    paths: [
      'M4.9,50L49.9,5.1l22.5,22.5L27.4,72.5,4.9,50Z',
      'M27.4,72.5L72.4,27.6l22.5,22.5-45,45-22.5-22.5Z',
    ],
  },
  Diamond2d: {
    shape: 'diamond',
    letter: 'd',
    difficulty: 'medium',
    numCells: 2,
    paths: [
      'M7,50l21.5-21.5l43,43L50,93L7,50z',
      'M28.5,28.5L49.9,7.1l43,43L71.5,71.5L28.5,28.5z',
    ],
  },
  Diamond2f: {
    shape: 'diamond',
    letter: 'f',
    difficulty: 'hard',
    numCells: 2,
    paths: [
      'M7,47.8l43-43l29.3,29.3L57.8,55.5L42.2,40.1L20.8,61.6L7,47.8L7,47.8z',
      'M93,47.8l-43,43L20.7,61.5l21.4-21.4l15.6,15.4L79.2,34L93,47.8L93,47.8z',
    ],
  },
  Diamond2g: {
    shape: 'diamond',
    letter: 'g',
    difficulty: 'hard',
    numCells: 2,
    paths: [
      'M50,4.8l43,43L64.6,76.2L64,48.2l-28-0.6l-0.6-28.1L50,4.8L50,4.8z',
      'M50,90.8l-43-43l28.4-28.4L36,47.5l28,0.7l0.6,28.1L50,90.8L50,90.8z',
    ],
  },
  Diamond3c: {
    shape: 'diamond',
    letter: 'c',
    difficulty: 'medium',
    numCells: 3,
    paths: [
      'M7,50l14.3-14.3l43,43L50,93L7,50z',
      'M21.3,35.7l14.3-14.3l43,43L64.3,78.7L21.3,35.7z',
      'M35.7,21.3L50,7l43,43L78.7,64.3L35.7,21.3z',
    ],
  },
  Diamond3d: {
    shape: 'diamond',
    letter: 'd',
    difficulty: 'medium',
    numCells: 3,
    paths: [
      'M35.7,78.7l43-43L93,50L50,93L35.7,78.7z',
      'M21.3,64.3l43-43l14.3,14.3l-43,43L21.3,64.3z',
      'M7,50L50,7l14.3,14.3l-43,43L7,50z',
    ],
  },
  Diamond4a: {
    shape: 'diamond',
    letter: 'a',
    difficulty: 'easy',
    numCells: 4,
    paths: [
      'M28.6,28.5L50,7l21.5,21.5L50.1,50L28.6,28.5z',
      'M50,50l21.5-21.5L93,50L71.5,71.5L50,50z',
      'M7,50l21.5-21.5L50,50L28.5,71.5L7,50z',
      'M28.5,71.5L50,50l21.5,21.5L50,93L28.5,71.5z',
    ],
  },
  Diamond4b: {
    shape: 'diamond',
    letter: 'b',
    difficulty: 'easy',
    numCells: 4,
    paths: [
      'M5 50L50 5L50 50L5 50z',
      'M50 5L95 50L50 50L50 5z',
      'M50 95L5 50L50 50L50 95z',
      'M95 50L50 95L50 50L95 50z',
    ],
  },
  Diamond4c: {
    shape: 'diamond',
    letter: 'c',
    difficulty: 'medium',
    numCells: 4,
    paths: [
      'M17.7,60.7l43-43l10.7,10.7l-43,43L17.7,60.7z',
      'M7,50L50,7l10.7,10.7l-43,43L7,50z',
      'M39.2,82.3l43-43L93,50L50,93L39.2,82.3z',
      'M28.5,71.4l43-43l10.7,10.7l-43,43L28.5,71.4z',
    ],
  },
  Diamond4d: {
    shape: 'diamond',
    letter: 'd',
    difficulty: 'medium',
    numCells: 4,
    paths: [
      'M17.7,60.7l43-43l10.7,10.7l-43,43L17.7,60.7z',
      'M7,50L50,7l10.7,10.7l-43,43L7,50z',
      'M39.2,82.3l43-43L93,50L50,93L39.2,82.3z',
      'M28.5,71.4l43-43l10.7,10.7l-43,43L28.5,71.4z',
    ],
  },
  Diamond4f: {
    shape: 'diamond',
    letter: 'f',
    difficulty: 'hard',
    numCells: 4,
    paths: [
      'M93,50L28.5,28.5L50,7L93,50z',
      'M50,93L28.5,28.5L7,50L50,93z',
      'M71.5,71.5l-43-43L50,93C50,93,71.5,71.5,71.5,71.5z',
      'M71.5,71.5l-43-43L93,50C93,50,71.5,71.5,71.5,71.5z',
    ],
  },
  Diamond4g: {
    shape: 'diamond',
    letter: 'g',
    difficulty: 'hard',
    numCells: 4,
    paths: [
      'M50,93L28.5,28.6L7,50.1L50,93z',
      'M28.5,28.4L50,92.8l21.5-21.5L28.5,28.4z',
      'M71.6,71.5L50.1,7.2L28.5,28.6L71.6,71.5z',
      'M50,7l21.5,64.4L93,49.9L50,7z',
    ],
  },
  Diamond4h: {
    shape: 'diamond',
    letter: 'h',
    difficulty: 'hard',
    numCells: 4,
    paths: [
      'M17.7,60.7l10.8-10.8l21.4,21.4l10.8-10.8L28.4,28.4L7,50L17.7,60.7z',
      'M60.6,60.6L49.8,71.4L28.4,50L17.6,60.8L49.9,93l21.4-21.6L60.6,60.6L60.6,60.6z',
      'M60.7,17.7L49.9,28.5l21.4,21.4L60.6,60.7L28.4,28.4L50,7L60.7,17.7z',
      'M60.6,60.6l10.8-10.8L50,28.4l10.8-10.8L93,49.9L71.4,71.3L60.6,60.6L60.6,60.6z',
    ],
  },
  Diamond6c: {
    shape: 'diamond',
    letter: 'c',
    difficulty: 'medium',
    numCells: 6,
    paths: [
      'M7,50.1l21.5-21.5l14.3,14.3L21.3,64.4L7,50.1z',
      'M28.5,28.5L50,7l14.3,14.3L42.8,42.9L28.5,28.5z',
      'M21.3,64.4l21.5-21.5l14.3,14.3L35.7,78.7L21.3,64.4z',
      'M42.8,42.9l21.5-21.5l14.3,14.3L57.2,57.2L42.8,42.9z',
      'M35.7,78.7l21.5-21.5l14.3,14.3L50,93.1L35.7,78.7z',
      'M57.2,57.2l21.5-21.5L93,50.1L71.5,71.6L57.2,57.2z',
    ],
  },
  Diamond6d: {
    shape: 'diamond',
    letter: 'd',
    difficulty: 'medium',
    numCells: 6,
    paths: [
      'M7,49.9l14.3-14.3l21.5,21.5L28.5,71.5L7,49.9z',
      'M21.3,35.6l14.3-14.3l21.5,21.5L42.8,57.1L21.3,35.6z',
      'M35.7,21.3L50,6.9l21.5,21.5L57.2,42.8L35.7,21.3z',
      'M28.5,71.5l14.3-14.3l21.5,21.5L50,93L28.5,71.5z',
      'M42.8,57.1l14.3-14.3l21.5,21.5L64.4,78.6L42.8,57.1z',
      'M57.2,42.8l14.3-14.3L93,49.9L78.7,64.3L57.2,42.8z',
    ],
  },
  Diamond8c: {
    shape: 'diamond',
    letter: 'c',
    difficulty: 'medium',
    numCells: 8,
    paths: [
      'M7,50l21.5-21.5l10.7,10.7L17.7,60.8L7,50z',
      'M28.5,28.5L50,7l10.7,10.7L39.2,39.3L28.5,28.5z',
      'M17.7,60.8l21.5-21.5L50,50L28.5,71.5L17.7,60.8z',
      'M39.2,39.3l21.5-21.5l10.7,10.7L50,50L39.2,39.3z',
      'M28.5,71.5L50,50l10.7,10.7L39.2,82.2L28.5,71.5z',
      'M50,50l21.5-21.5l10.7,10.7L60.7,60.7L50,50z',
      'M39.2,82.2l21.5-21.5l10.7,10.7L49.9,93L39.2,82.2z',
      'M60.7,60.7l21.5-21.5L93,50L71.4,71.5L60.7,60.7z',
    ],
  },
  Diamond8d: {
    shape: 'diamond',
    letter: 'd',
    difficulty: 'medium',
    numCells: 8,
    paths: [
      'M7,50l10.7-10.7l21.5,21.5L28.5,71.5L7,50z',
      'M17.8,39.3l10.7-10.7L50,50L39.3,60.8L17.8,39.3z',
      'M28.5,28.5l10.7-10.7l21.5,21.5L50,50L28.5,28.5z',
      'M39.2,17.8L50,7.1l21.5,21.5L60.7,39.3L39.2,17.8z',
      'M28.5,71.5l10.7-10.7l21.5,21.5L50,93L28.5,71.5z',
      'M39.3,60.8L50,50l21.5,21.5L60.8,82.3L39.3,60.8z',
      'M50,50l10.7-10.7l21.5,21.5L71.5,71.5L50,50z',
      'M60.7,39.3l10.7-10.7L93,50.1L82.2,60.8L60.7,39.3z',
    ],
  },
  Diamond8e: {
    shape: 'diamond',
    letter: 'e',
    difficulty: 'medium',
    numCells: 8,
    paths: [
      'M7,50h43L28.5,28.5L7,50z',
      'M50,50V7L28.5,28.5L50,50z',
      'M50,50V7l21.5,21.5L50,50z',
      'M50,50h43L71.5,28.5L50,50z',
      'M7,50h43L28.5,71.5L7,50z',
      'M50,93V50L28.5,71.5L50,93z',
      'M50,93V50l21.5,21.5L50,93z',
      'M50,50h43L71.5,71.5L50,50z',
    ],
  },
  Diamond8f: {
    shape: 'diamond',
    letter: 'f',
    difficulty: 'hard',
    numCells: 8,
    paths: [
      'M71.2,71.5H28.5L49.8,93L71.2,71.5L71.2,71.5z',
      'M71.2,28.7H28.5l21.4,21.5L71.2,28.7L71.2,28.7z',
      'M71.2,28.8v42.8l21.5-21.4L71.2,28.8L71.2,28.8z',
      'M28.5,28.8v42.8L50,50.2L28.5,28.8L28.5,28.8z',
      'M28.5,28.8h42.8L49.9,7.3L28.5,28.8L28.5,28.8z',
      'M28.5,71.6h42.8L49.9,50.2L28.5,71.6L28.5,71.6z',
      'M28.5,71.5V28.8L7,50.2L28.5,71.5L28.5,71.5z',
      'M71.2,71.5V28.8L49.8,50.2L71.2,71.5L71.2,71.5z',
    ],
  },
  Diamond8g: {
    shape: 'diamond',
    letter: 'f',
    difficulty: 'hard',
    numCells: 8,
    paths: [
      'M7,49.9l53.7,32.3l0,0L50,93L7,49.9z',
      'M60.7,82.2L7,49.9l0,0l10.8-10.8L60.7,82.2z',
      'M17.7,39.3l10.8-10.8l0,0l32.3,53.7L17.7,39.3z',
      'M71.5,71.5L60.7,82.2l0,0L28.4,28.5L71.5,71.5z',
      'M28.5,28.4l53.7,32.3l0,0L71.5,71.5L28.5,28.4z',
      'M82.2,60.7L28.5,28.4l0,0l10.8-10.8L82.2,60.7z',
      'M39.2,17.8L49.9,7l0,0l32.3,53.7L39.2,17.8z',
      'M93,50L82.2,60.7l0,0L49.9,7L93,50z',
    ],
  },
  Diamond8h: {
    shape: 'diamond',
    letter: 'f',
    difficulty: 'hard',
    numCells: 8,
    paths: [
      'M28.5,28.5l32.2,10.7l10.7,32.2L28.5,28.5z',
      'M7,50.1l32.2,10.7l10.7,32.2L7,50.1z',
      'M71.4,71.4L39.2,60.7L28.5,28.5L71.4,71.4z',
      'M92.9,49.9L60.7,39.2L50.1,7L92.9,49.9z',
      'M71.5,71.4L93,49.9L60.8,39.2L71.5,71.4z',
      'M49.9,92.9l21.5-21.5L39.2,60.7L49.9,92.9z',
      'M28.5,28.5L7,50l32.2,10.7L28.5,28.5z',
      'M50.1,7L28.6,28.5l32.2,10.7L50.1,7z',
    ],
  },
  Diamond8i: {
    shape: 'diamond',
    letter: 'f',
    difficulty: 'hard',
    numCells: 8,
    paths: [
      'M60.8,39.2l10.8-10.7L93,50L82.2,60.7L60.8,39.2z',
      'M50,71.6l21.5-21.5l10.7,10.8L60.8,82.3L50,71.6z',
      'M17.8,39.3l21.5-21.5L50,28.6L28.5,50.1L17.8,39.3z',
      'M28.5,71.5l10.8-10.7l21.5,21.5L49.9,93L28.5,71.5z',
      'M28.5,50.1l10.8-10.7l21.5,21.5L50,71.6L28.5,50.1z',
      'M7.1,50.1l10.8-10.7l21.5,21.5L28.5,71.6L7.1,50.1z',
      'M39.3,17.8L50,7.1l21.5,21.5L60.8,39.3L39.3,17.8z',
      'M39.3,39.3L50,28.6l21.5,21.5L60.8,60.8L39.3,39.3z',
    ],
  },
  Diamond8j: {
    shape: 'diamond',
    letter: 'f',
    difficulty: 'hard',
    numCells: 8,
    paths: [
      'M17.7,60.7L28.5,50L50,71.4L39.2,82.2L17.7,60.7z',
      'M28.5,50l10.7-10.8l21.5,21.5L50,71.4L28.5,50z',
      'M39.2,39.2L50,28.5l21.5,21.5L60.7,60.7L39.2,39.2z',
      'M50,28.5l10.7-10.8l21.5,21.5L71.4,49.9L50,28.5z',
      'M82.2,39.2l10.8,10.7L71.5,71.4L60.7,60.7L82.2,39.2z',
      'M60.7,60.7l10.8,10.7L50,92.9L39.2,82.2L60.7,60.7z',
      'M49.9,7l10.8,10.7L39.2,39.2L28.5,28.5L49.9,7z',
      'M28.5,28.5l10.8,10.7L17.7,60.7L7,50L28.5,28.5z',
    ],
  },
  Diamond9c: {
    shape: 'diamond',
    letter: 'c',
    difficulty: 'medium',
    numCells: 9,
    paths: [
      'M7,50l14.3-14.3L35.7,50L21.3,64.3L7,50z',
      'M21.4,35.7l14.3-14.3L50,35.7L35.7,50L21.4,35.7z',
      'M35.7,21.3L50.1,7l14.3,14.3L50.1,35.7L35.7,21.3z',
      'M21.3,64.4L35.7,50L50,64.4L35.7,78.7L21.3,64.4z',
      'M35.7,50L50,35.7L64.3,50L50,64.4L35.7,50z',
      'M50.1,35.7l14.3-14.3l14.3,14.3L64.4,50L50.1,35.7z',
      'M35.6,78.7L50,64.3l14.3,14.3L50,93L35.6,78.7z',
      'M50,64.4L64.3,50l14.3,14.3L64.3,78.7L50,64.4z',
      'M64.3,50l14.3-14.3L93,50L78.7,64.4L64.3,50z',
    ],
  },

  Triangle2a: {
    shape: 'triangle',
    letter: 'a',
    difficulty: 'easy',
    numCells: 2,
    paths: ['M50,7.3L7.3,92.7H50V7.3z', 'M50,7.3l42.7,85.4H50V7.3z'],
  },
  Triangle2b: {
    shape: 'triangle',
    letter: 'b',
    difficulty: 'easy',
    numCells: 2,
    paths: [
      'M93.71 51L8.29 8.29L8.29 51L93.71 51z',
      'M93.71 51L8.29 93.71L8.29 51L93.71 51z',
    ],
  },
  Triangle2c: {
    shape: 'triangle',
    letter: 'c',
    difficulty: 'medium',
    numCells: 2,
    paths: [
      'M5,89L50.1,11l22.3,39.1L5,89h0Z',
      'M5,89H95c0,0-22.7-38.9-22.7-38.9L5,89h0Z',
    ],
  },
  Triangle3c: {
    shape: 'triangle',
    letter: 'c',
    difficulty: 'medium',
    numCells: 3,
    paths: [
      'M49.97,13.18V62.11l42.42,24.71L49.97,13.18Z',
      'M49.92,13.18V62.11L7.5,86.82,49.92,13.18Z',
      'M7.77,86.61l42.21-24.49,42.53,24.55-84.73-.05Z',
    ],
  },
  Triangle3d: {
    shape: 'triangle',
    letter: 'd',
    difficulty: 'hard',
    numCells: 3,
    paths: [
      'M50,11l-15,78H5L50,11Z',
      'M65,89h30L50.1,11l14.9,78Z',
      'M35,89h30L50,11l-15,78Z',
    ],
  },
  Triangle3e: {
    shape: 'triangle',
    letter: 'e',
    difficulty: 'hard',
    numCells: 3,
    paths: [
      'M5,88.9L27.7,49.6l22.2,13,.2,26.3H5Z',
      'M27.7,49.6l22.2,13,22.4-12.9L50,11,27.7,49.6Z',
      'M95,89l-22.7-39.3h0l-22.4,12.9,.2,26.3h44.9Z',
    ],
  },
  Triangle3f: {
    shape: 'triangle',
    letter: 'f',
    difficulty: 'hard',
    numCells: 3,
    paths: [
      'M28.7,49.9s5.7-.6,11.9,3.3c6.5,4.1,9.4,11.2,9.4,11.2,0,0,7.6,.1,13-3.9,6.8-5.1,8.5-10.4,8.5-10.4L50.2,7,28.7,49.9Z',
      'M71.6,50s-2.4,6.1-8.5,10.3c-6.3,4.5-13.1,3.8-13.1,3.8,0,0-3.8,7.5-3.6,15,.4,9.3,3.6,13.8,3.6,13.8h42.9l-21.4-42.9Z',
      'M49.9,93s-3.3-5.5-3.5-13.6c-.2-8.6,3.7-15,3.7-15,0,0-3.7-7.6-9.5-11.1-7.2-4.3-12.1-3.3-12.1-3.3L7,93H49.9Z',
    ],
  },
  Triangle4c: {
    shape: 'triangle',
    letter: 'c',
    difficulty: 'medium',
    numCells: 4,
    paths: [
      'M5,89L27.5,50l22.5,39H5Z',
      'M50,89l22.5-39,22.5,39H50Z',
      'M72.5,50l-22.5,39L27.5,50h45Z',
      'M72.5,50L50,11,27.5,50h45Z',
    ],
  },
  Triangle4d: {
    shape: 'triangle',
    letter: 'd',
    difficulty: 'hard',
    numCells: 4,
    paths: [
      'M27.5,89L50,11,5,89H27.5Z',
      'M50,89V11c0,0-22.5,78-22.5,78h22.5Z',
      'M72.5,89L50,11l45,78h-22.5Z',
      'M50,89V11c0,0,22.5,78,22.5,78h-22.5Z',
    ],
  },
  Triangle4e: {
    shape: 'triangle',
    letter: 'e',
    difficulty: 'hard',
    numCells: 4,
    paths: [
      'M5,88.9L27.5,49.9l22.5,39H5Z',
      'M50,88.9l22.5-39,22.5,39H50Z',
      'M50,11L27.5,49.9l22.5,39V11Z',
      'M50.1,11l22.5,39-22.5,39V11Z',
    ],
  },
  Triangle6d: {
    shape: 'triangle',
    letter: 'd',
    difficulty: 'hard',
    numCells: 6,
    paths: [
      'M50.1,11V63c0,0-22.6-13-22.6-13L50.1,11Z',
      'M49.9,11V63c0,0,22.6-13,22.6-13L49.9,11Z',
      'M5,89l45-26-22.5-13L5,89Z',
      'M5,88.9l45-26v26H5Z',
      'M95,88.9l-45-26v26h45Z',
      'M95,89l-45-26,22.5-13,22.5,39.1Z',
    ],
  },
  Triangle8d: {
    shape: 'triangle',
    letter: 'd',
    difficulty: 'hard',
    numCells: 8,
    paths: [
      'M5,89H50s-11.2-19.5-11.2-19.5L5,89h0Z',
      'M5,89L27.5,50l11.2,19.5L5,89h0Z',
      'M95,89l-22.5-39-11.2,19.5,33.8,19.5h0Z',
      'M95,89H50s11.2-19.5,11.2-19.5l33.8,19.5h0Z',
      'M50,11L27.6,50h22.5V11h0Z',
      'M50,11l22.5,39h-22.5V11h0Z',
      'M50,89L27.6,50h22.5v39h0Z',
      'M50,89l22.5-39h-22.5v39h0Z',
    ],
  },
  Triangle8e: {
    shape: 'triangle',
    letter: 'e',
    difficulty: 'hard',
    numCells: 8,
    paths: [
      'M27.5,50L5,89H27.5V50h0Z',
      'M27.5,50l22.5,39H27.5V50h0Z',
      'M72.5,50l-22.5,39h22.5V50h0Z',
      'M72.5,50l22.5,39h-22.5V50h0Z',
      'M50,11L27.5,50h22.5V11h0Z',
      'M50,11l22.5,39h-22.5V11h0Z',
      'M50,89L27.5,50h22.5v39h0Z',
      'M50,89l22.5-39h-22.5v39h0Z',
    ],
  },
  Triangle9c: {
    shape: 'triangle',
    letter: 'c',
    difficulty: 'medium',
    numCells: 9,
    paths: [
      'M35,37l15-26,15,26h-30Z',
      'M20,63l15-26,15,26H20Z',
      'M35,37l15,26,15-26h-30Z',
      'M80,63l-15-26-15,26h30Z',
      'M5,89l15-26,15,26H5Z',
      'M20,63l15,26,15-26H20Z',
      'M65,89l-15-26-15,26h30Z',
      'M50,63l15,26,15-26h-30Z',
      'M95,89l-15-26-15,26h30Z',
    ],
  },
};

// export const tom = 'tom';
