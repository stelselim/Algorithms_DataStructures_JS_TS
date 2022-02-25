export { }


function merge(arr1: number[], arr2: number[]): number[] {
    let sorted: number[] = [];

    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) {
            sorted.push(arr1.shift()!)
        } else {
            sorted.push(arr2.shift()!)
        }
    }
    return [...sorted, ...arr1, ...arr2];
}

function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort(arr.slice(middle))

    return merge(left, right);
}

const array1 = [1, 23, 5, 6, 7, 67, 331, 2, 3, 3, 35, 445, 25, 63, 25, 12, 123, 121, 45];


function binarySearch(arr: number[], val: number): boolean {
    let start = 0;
    let end = arr.length - 1;
    let count = 0;

    while (!(start >= end)) {
        let middle = Math.floor((start + end) / 2)
        count++;
        console.log("Count: " + count + " Value: " + arr[middle]);
        if (val > arr[middle]) {
            start = middle + 1;
        } else if (middle === val) {
            return true;
        }
        else {
            end = middle;
        }
    }
    return false;
}

binarySearch(mergeSort(array1), 63);