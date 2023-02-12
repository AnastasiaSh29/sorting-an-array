const arr = Array(50).fill(null).map(()=> Math.floor(Math.random() * 2000) - 1000);
// const array = Array(50).fill(null).map(()=> Math.floor(Math.random() * 2000));

// const array = [437, -271, -716, -242, -855, 89, 946, -302, 396, 716, 233, -279, 279, 854, 635, 314, -703, -708, -357, -666, 505, -287, 259, 727, -964, 989, -514, -358, -645, 823, -291, 47, -925, -14, -707, 351, -702, -370, -777, 620, -659, -870, 568, 264, -993, 83, 433, 844, 695, 924, 125, 28, 676, -424, 4, -573, -720, -269, 211, 379, -234, 508, -470, 27, -814, 97, 797, -443, -470, 32, 207, -789, -854, 59, -29, 326, 153, -755, -156, 37, 977, 403, -10, 285, 682, 536, -843, 279, 406, -57, -654, -251, 937, -390, -63, 494, -512, 14, 511, 278];
// const array = [554, 311, 209, -374, 224, 717, -283, -217, -842, -663, -16, -543, 745, 894, 80, -803, -198, -320, -101, 959, 865, -457, -157, 994, 21, 803, -442, -556, 625, -863, 374, -492, -576, 29, -673, 88, 604, -851, 492, 483, -242, -975, 934, -581, 868, 191, 722, -955, 295, -26, 39, -627, 765, -551, 383, -699, -968, 672, -278, -994, 71, 295, 426, -478, -107, 532, 52, 355, 988, 412, -980, 983, 934, 555, 784, -804, -907, 107, 549, -100, -948, -466, 521, 631, 682, 289, 436, 969, -191, -284, -523, -727, 310, -846, -376, 104, -993, -90, 52, -95];

console.log(arr);
console.log('-------------------------------------------------');


// Bubble Sort
console.time('###console-BubbleSortTime');
const bubbleSorted = bubbleSort(arr);
console.timeEnd('###console-BubbleSortTime');


const startBubbleSort = performance.now();
const bubbleSortedTwo = bubbleSort(arr);
const endBubbleSort = performance.now();
const bubbleSortTime = endBubbleSort - startBubbleSort;
console.log('###bubbleSortTimeTwo: ', `${bubbleSortTime} ms`);
// console.log(bubbleSortTime);

// console.log('###BubbleSort: ', bubbleSorted);



function bubbleSort(arr){

const array = arr.slice();

    for(let i = 0; i < array.length - 1; i++){

        for(let k = 0; k < array.length - 1 - i; k++){

            if(array[k] > array[k + 1]){

                const t = array[k];
                array[k] = array[k + 1];
                array[k + 1] = t;
            }
        }
    }

    return array;
}

console.log('-------------------------------------------------');

// Sort by choice
console.time('###console-SortByChoiceTime');
const chose = selectionSort(arr);
console.timeEnd('###console-SortByChoiceTime');

const startSelectionSort = performance.now();
const choseTwo = selectionSort(arr);
const endSelectionSort = performance.now();
const selectionSortTime = endSelectionSort - startSelectionSort;
console.log('###bubbleSortTimeTwo: ', `${selectionSortTime} ms`);

// console.log('###SortByChoice: ', chose);

function selectionSort(arr){

    const array = arr.slice();

    for(let n = 0; n < array.length; n++){

        let max = -Infinity;
        let index = null;

        for(let i = 0; i < array.length - n; i ++){
            if(array[i] > max){
                max = array[i];
                index = i;
            }
        }
        let k = array[array.length - 1 - n];
        array[array.length - 1 - n] = max;
        array[index] = k;
    }

    return array;
}

console.log('-------------------------------------------------');

// Insertion Sort
console.time('###console-InsertionSortTime');
const inserted = insertionSort(arr);
console.timeEnd('###console-InsertionSortTime');

const startInsertionSort = performance.now();
const insertedTwo = insertionSort(arr);
const endInsertionSort = performance.now();
const insertionSortTime = endInsertionSort - startInsertionSort;
console.log('###InsertionSortTimeTwo: ', `${insertionSortTime} ms`);

// console.log('###InsertionSort: ', inserted);

function  insertionSort(arr){
    const array = arr.slice();

    for (let i = 1;  i < array.length; i++) {

        const current = array[i];
        let j = i - 1;

        while ((j > -1) && (array[j] > current)) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}


console.log('-------------------------------------------------');

// Merge Sort
console.time('###console-MergeSort Time');
const mergeSorted = mergeSort(arr);
console.timeEnd('###console-MergeSort Time');

const startMergeSort = performance.now();
const mergeSortedTwo = mergeSort(arr);
const endMergeSort = performance.now();
const mergeSortTime = endMergeSort-startMergeSort;
console.log('###mergeSortTimeTwo: ', `${mergeSortTime} ms`);

// console.log('###MergeSort: ', mergeSorted);


function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let results = [];

    while(i < arr1.length && j < arr2.length) {
     if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;  
     }else {
      results.push(arr2[j])
      j++
     }
    }
    while(i < arr1.length){
     results.push(arr1[i]);
     i++;
    }
    while(j < arr2.length){
     results.push(arr2[j]);
     j++;
    }
    return results
   }

   function mergeSort(arr){
    const array = arr.slice();
    if (array.length <= 1) return array;
    
    let mid = Math.floor(array.length/2);
    let leftArr = mergeSort(array.slice(0, mid));
    let rightArr = mergeSort(array.slice(mid));
     return merge(leftArr, rightArr);
   }


   console.log('-------------------------------------------------');

// Quicksort
console.time('###console-QuickSort Time');
const quickSorted = quickSort(arr);
console.timeEnd('###console-QuickSort Time');

const startQuickSort = performance.now();
const quickSortedTwo = quickSort(arr);
const endQuickSort = performance.now();
const quickSortTime = endQuickSort - startQuickSort;
console.log('###quickSortTimeTwo: ', `${quickSortTime} ms`);

// console.log('###QuickSort: ', quickSorted);

function quickSort(arr) {
    const array = arr.slice();
   if (array.length <= 1) return array;

   const pivot = array[array.length - 1];
   const leftArr = [];
   const rightArr = [];

   for (let i = 0; i < array.length - 1; i++) {
       if (array[i] < pivot) {
           leftArr.push(array[i]);
       }
       else {
           rightArr.push(array[i])
       }
   }

   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log('-------------------------------------------------');
 
const sortsArr = [];

let bubbleObj = {name: 'bubbleSortTime' , time: bubbleSortTime},
    selectionObj = {name: 'selectionSortTime' , time : selectionSortTime},
    insertionObj = {name: 'insertionSortTime' , time : insertionSortTime},
    mergeObj = {name: 'mergeSortTime' , time : mergeSortTime},
    quickObj = {name: 'quickSortTime' , time : quickSortTime};

    sortsArr.push(bubbleObj);
    sortsArr.push(selectionObj);
    sortsArr.push(insertionObj);
    sortsArr.push(mergeObj);
    sortsArr.push(quickObj);

// console.log(sortsArr);
console.log(sortsArr.sort((prev, next) => prev.time - next.time));
