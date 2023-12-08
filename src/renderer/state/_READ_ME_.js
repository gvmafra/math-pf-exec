// READ ME
// THIS IS THE OLD VERSION OF THE CODE.
// I'M KEEPING IT HERE FOR REFERENCE.
// THE NEW VERSION IS IN THE FILE "gameReducer.ts",
// where I'm updating click count and score in the same case, called 'INCREMENT_CLICK_COUNT'

        /*
        The algorithm for calculating the score is as follows:
        1. Get the current ratio of the challenge
        2. Get the current number of segments in the game canvas
        3. Use the matching ratio to get the number of segments that should be toggled
        4. That number is the minimum number of clicks required to complete the level
        5. Any number of clicks above that number should reduce the score 
            (i.e., if the minimum number of clicks is 4, 
            then 5 clicks should reduce the score by 1, 6 clicks should reduce the score by 2, etc.)
        6. The score should be a number between 0 and 3.
        7. Clicks include both toggling and untoggling cells, and clicking on the buttons that divide the canvas.

        here's what I have so far, It doesn't work because it isn't accounting for the buttons that divide the canvas. 
        It also doesn't account for the fact that the number of segments in the canvas can change.

        //  const minimumNumberOfClicks = Math.ceil(
        //    challengeRatio * numberOfSegments
        //  );
        //  const currentNumberOfClicks = currentLevel.metadata.clickCount;
        //  const difference = currentNumberOfClicks - minimumNumberOfClicks;
        //  const score = Math.max(3 - difference, 0);

        //  currentLevel.metadata.score = score as 1 | 2 | 3;

        what I need to do is to get the number of segments in the canvas after the canvas is divided, 
        and then use that number to calculate the minimum number of clicks required to complete the level.
        I also need to account for the fact that the number of segments in the canvas can change. 
        As of now, when the canvas is divided, the number of points increases. I need to account for that.

        So I tried this:
        */

        // // 1. Get the current ratio of the challenge
        // const currentChallengeRatio = getToggledRatio(challenge);
        // // 2. Get the current number of segments in the game canvas
        // const currentNumberOfSegments = canvas.toggled.length;
        // // 3. Use the matching ratio to get the number of segments that should be toggled
        // const minimumNumberOfSegments = Math.ceil(
        //   currentChallengeRatio * currentNumberOfSegments
        // );
        // // 4. That number is the minimum number of clicks required to complete the level
        // const minimumNumberOfClicks = minimumNumberOfSegments;
        // // 5. Any number of clicks above that number should reduce the score
        // const currentNumberOfClicks = currentLevel.metadata.clickCount;
        // const difference = currentNumberOfClicks - minimumNumberOfClicks;
        // const score = Math.max(3 - difference, 0);
        // // 6. The score should be a number between 0 and 3.
        // currentLevel.metadata.score = score as 1 | 2 | 3;

        /*
        This works fine for the challenge canvas, but not for the grid canvas.
        I need to account for the fact that the number of points should never exceed 3.
        The required minimum number of clicks should equal the number of cells toggled required to equal the challenge ratio, 
        plus the amount of clicks required to divide the canvas.

        i.e.: 
        If the challenge ratio is 0.5, and the canvas is divided into 2 cells, 
        then the minimum number of clicks required to complete the level with 3 points is 3. 
        (1 click to divide the canvas, and 2 clicks to toggle the cells).
        If the challenge ratio is 0.5, and the canvas is blank, then the minimum number of clicks required to complete the level with 3 points is 2. 
        (1 click to divide the canvas, and 1 click to toggle the cells).
        If the challenge ratio is 2/3, and the canvas is divided into 2 cells, the minimum number of clicks required to complete the level with 3 points is 3. 
        (1 click to divide the canvas, and 2 clicks to toggle the cells).

        In addition, canvas.numberOfDivisions should take care of the number of clicks required to divide the canvas.
        If the user clicks the divide button, then canvas.numberOfDivisions should increase by 1. 
        That should reflect the score, considering that the user should aim for the most efficient way of reaching the desired ratio.
        */
