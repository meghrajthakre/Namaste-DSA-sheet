
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function (prices) {
    let min = prices[0];   // track the minimum price seen so far (buy price)
    let maxProfit = 0;     // track the maximum profit

    for (let i = 0; i < prices.length; i++) {
        // check if selling today gives a better profit
        if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }
        // update min if today’s price is lower
        if (prices[i] < min) {
            min = prices[i];
        }
    }
    return maxProfit;
};
let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices)); // 5  (buy at 1, sell at 6)
