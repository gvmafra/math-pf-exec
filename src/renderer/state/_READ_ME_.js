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



----------------------------------------------------------------------------------------------------------------------------------------------------------



As you can see, in the middle panel I brought in an algorithm to calculate the score of the game.
Although, it isn't working properly, so I want to change my approach.
Notice how the clickCount is being calculated and displayed on the top right corner of the right panel.
The clickCount is the number of times the user clicked on a cell or on the buttons to split the grid.
I want to use this clickCount to calculate the score of the game.

In every level, the user begins with 3 points. If the user clicks more than the clickMax, the score decreases by one point for each extra click above the clickMax. 
So the clickMax is the maximum number of clicks the user can make in a level before beginning to lose points. The clickMax is different for each level.

There is a total of 12 stages, with 10 levels in each of them. 
The score of each level is calculated by allowing the user to click the total number of times of the clickMax, and after that,
the score decreases by one point for each extra click above the clickMax.

For example, if the clickMax is 10, the user can click 10 times before beginning to lose points. If the user clicks 12 times, the score decreases by 2 points, and ends up being 1 point.
The lowest score a user can be given per level is 1 point.

After the user finishes a level, the score of that level is added to the total score of the stage.
The total score of the stage is the sum of the scores of all the levels in that stage.

After the user finishes a stage, the stage score is supposed to be displayed to the user, so we need to calculate the stage score toolbar.

I was thinking of creating a file called scoreData.ts, where I would host the score card for the videogame, including the clickMax for each level.
Right now, I need help with the following:
- I need to create the scoreData.ts file, and firugre out the structure to host the score card for the videogame.
- I need to calculate the stage score toolbar, which is the sum of the scores of all the levels in that stage.
- I need to display the stage score toolbar to the user after the user finishes a stage.


*/
