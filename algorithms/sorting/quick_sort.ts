export { }

const array1 = [1, 23, 5, 6, 7, 67, 331, 2, 3, 3, 35, 445, 25, 63, 25, 12, 123, 121, 45];

function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    // Select pivot as the last element of the array.
    let pivot = arr[arr.length - 1];

    let leftArray = [];
    let centerArray = [pivot];
    let rightArray = [];

    // Pivot will be removed 
    arr.pop();
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArray.push(arr[i]);
        } else if (arr[i] === pivot) {
            centerArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }
    }

    const left = quickSort(leftArray);
    const right = quickSort(rightArray);

    return [...left, ...centerArray, ...right];
}




const sorted = quickSort(array1);
console.log(sorted);