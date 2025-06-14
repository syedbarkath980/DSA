/* STATEMENT: Best time to buy and sell stock 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a 
different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.
*/


let prices = [2, 4, 1]

function bestTime() {
    let min = prices[0];       // Track the lowest price so far
    let maxProfit = 0;         // Track the maximum profit

    for (let i = 1; i < prices.length; i++) {
        // Update maxProfit if selling at current price is more profitable
        if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }

        // Update min if current price is lower than the previous min
        if (prices[i] < min) {
            min = prices[i];
        }
    }

    return maxProfit;          // Return the best profit possible
}

console.log(bestTime()); // Output: 2

