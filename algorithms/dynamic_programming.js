// Fibonacci with Memoization
function fib(n, memo = {}) {
  if (memo[n] !== undefined) return memo[n];
  if (n === 0 || n === 1) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

  return memo[n];
}

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(50));

console.log("\n\n------ 2 Grid -------");
// 2d Grid Traveler
function gridTraveler(n, m, memo = {}) {
  const key = n + "," + m;
  if (memo[key]) return memo[key];
  if (n === 0 || m === 0) return 0;
  if (n === 1 && m === 1) return 1;
  memo[key] = gridTraveler(n - 1, m, memo) + gridTraveler(n, m - 1, memo);
  return memo[key];
}
console.log(gridTraveler(1, 3));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(18, 18));

// 2,3 => 1,3 => 1,2 => 1,1
// 2,3 => 2,2 => 2,1 => 1,1
//          2,3
//    1,3        2,2
//  1,2     1,2     2,1
// X  1,1  X 1,1  1,1 X => 3 different paths

// Can Sum

function canSum(target, numbers) {
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    let remainder = target - num;
    if (canSum(remainder, numbers)) {
      return true;
    }
  }
  return false;
}

console.log("Can SUM");
console.log(canSum(7, [2, 3]));
console.log(canSum(5, [2, 4]));
console.log(canSum(5, [4]));

//// How Sum

function howSum(target, numbers, memo = {}) {
  if (memo[target] !== undefined) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    let remainder = target - num;
    let remainderArray = howSum(remainder, numbers, memo);
    if (remainderArray !== null) {
      memo[target] = [...remainderArray, num];
      return memo[target];
    }
  }
  memo[target] = null;
  return memo[target];
}

console.log("How SUM");
console.log(howSum(7, [2, 3]));
console.log(howSum(114, [5, 14]));

///// COmbination

var combinationSum4 = function (nums, target, memo = {}) {
  if (memo[target]) return memo[target];
  if (target === 0) return 1;
  if (target < 0) return 0;

  let count = 0;
  for (let num of nums) {
    let remainder = target - num;
    count += combinationSum4(nums, remainder, memo);
  }

  memo[target] = count;
  return count;
};

/// Best Sum

var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  let result = find(coins, amount);
  if (result === null) return -1;
  return result.length;
};

function find(coins, amount, memo = {}) {
  if (memo[amount]) return memo[amount];
  if (amount === 0) return [];
  if (amount < 0) return null;

  let shortest = null;

  /// n times
  for (let coin of coins) {
    let remainder = amount - coin;
    let remainderArray = find(coins, remainder);

    if (remainderArray !== null) {
      let res = [...remainderArray, coin]; // amount time

      if (shortest === null || shortest.length > res.length) {
        shortest = res;
      }
    }
  }
  memo[amount] = shortest;
  return shortest;
}
