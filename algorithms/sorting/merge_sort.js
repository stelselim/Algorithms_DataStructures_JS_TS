function merge(arr1, arr2) {
  let sorted = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }
  return [...sorted, ...arr1, ...arr2];
}
function merge_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = arr.length / 2;
  let left = merge_sort(arr.slice(0, middle));
  let right = merge_sort(arr.slice(middle));

  return merge(left, right);
}

const array1 = [1, 23, 5, 6, 7, 67, 331, 2, 3, 3, 35, 445, 25, 63, 25, 12, 123, 121, 45];

const sorted = merge_sort(array1);
console.log(sorted);