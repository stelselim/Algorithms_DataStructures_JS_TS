var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let left = 0;
  let hashMap = {};

  for (let right = 0; right < s.length; right++) {
    if (!hashMap[s[right]]) {
      hashMap[s[right]] = 0;
    }
    hashMap[s[right]] += 1;

    while (hashMap[s[right]] > 1) {
      hashMap[s[left]] -= 1;
      left++;
    }
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};

var maxProfit = function (prices) {
  let max = 0;
  // 7 3 6 1 5 2
  let left = 0;

  for (let right = 0; right < prices.length; right++) {
    if (prices[left] < prices[right]) {
      max = Math.max(prices[right] - prices[left], max);
    } else {
      left = right;
    }
  }
  return max;
};
