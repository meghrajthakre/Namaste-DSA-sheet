// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked (the number I picked stays the same throughout the game).

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.


/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    // Initialize the search range
    let left = 1;       // Smallest possible number
    let right = n;      // Largest possible number
   
    // Binary search loop — keeps running until left crosses right
    while (left <= right) {
        // Find the middle number between left and right
        let mid = Math.floor((left + right) / 2);

        // Call the provided 'guess' API to compare 'mid' with the target
        const res = guess(mid);

        // If the guess is correct (target found)
        if (res === 0)  {
            return mid;
        }
        // If our guess is higher than the target number,
        // move the 'right' pointer just before 'mid'
        else if (res < 0) {
            right = mid - 1;
        }
        // If our guess is lower than the target number,
        // move the 'left' pointer just after 'mid'
        else {
            left = mid + 1;
        }
    }

    // If not found (though problem guarantees one answer)
    return -1;
};
