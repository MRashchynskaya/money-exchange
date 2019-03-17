// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let summ = {};
    const coins = { 
        H: 50, 
        Q: 25, 
        D: 10, 
        N: 5, 
        P: 1 
    };
    const maxSumm = 10000;

    if (currency <= maxSumm) {
        let currentSumm = currency;
        for (let key in coins) {
            const coinsAmount = Math.floor(currentSumm / coins[key]);
            if (coinsAmount > 0) {
                summ[key] = coinsAmount;
                currentSumm = currentSumm - (coinsAmount * coins[key]);
            }
        }
    }
    else {
        summ.error = "You are rich, my friend! We don't have so much coins for exchange";
    }

    return summ;
}
