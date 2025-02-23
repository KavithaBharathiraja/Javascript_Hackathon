//WJSP to perform ascending order Selection sort

function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            // Swap arr[i] and arr[minIndex]
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Example usage
const numbers = [64, 25, 12, 22, 11];
console.log("Original array:", numbers);
console.log("Sorted array:", selectionSort(numbers));