const submitArray = document.getElementById("submitArray")
const displayArray = document.getElementById("sortedArray")


function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i; j++) {
            // above in the inner loop it is arr.length - i because during the first iteration of the outer loop, the last index will already be sorted, next time we go through it, no need to check again, after the second iteration, two indices will be sorted so no need to check them, etc
            if (arr[j] < arr[j-1]) {
                swap(arr,j-1,j)
            }
        }
    }
    return arr
}

function swap(arr, index1, index2) {
    temp = arr[index2]
    arr[index2] = arr[index1]
    arr[index1] = temp
}

submitArray.addEventListener("click", () => {
    const numberInput = document.getElementById("nbrArray").value
let numberArray = numberInput.split("").map(Number)
    bubbleSort(numberArray)
    displayArray.innerHTML = `Sorted Array: <br/> [${bubbleSort(numberArray)}]`
})

