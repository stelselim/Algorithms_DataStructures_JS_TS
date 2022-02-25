export {}
const array = [1, 23, 5, 6, 7, 67, 331, 2, 3, 3, 35, 445, 25, 63, 25, 12, 123, 121, 45];

function bubbleSort(arr: number[]) {
    let isSorted = false;
    let lastSortedElement = arr.length - 1;
    while (!isSorted) {
        isSorted = true;

        for (let i = 0; i < lastSortedElement; i++) {
            if (arr[i] > arr[i + 1]) {
                isSorted = false;
                const tmp = arr[i+1];
                arr[i + 1] = arr[i];
                arr[i] = tmp;
            }
        }
        lastSortedElement--;
    }
}

bubbleSort(array);
console.log(array);