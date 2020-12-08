let len = 0;
// 升序排列用最大堆，降序用最小堆
// 构建堆
const buildMaxHeap = (arr) => {
    len = arr.length;
    // 从下往上调整
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        updateHeap(arr, i)
    }
}

/**
 * 堆调整
 * @param {*} arr 原数组
 * @param {*} i 调整的位置
 */
const updateHeap = (arr, i) => {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right
    }
    if (largest != i) {
        // 交换位置
        swap(arr, i, largest)
        // 从 largest 处继续调整下面的栈，因为当前节点发生了变化，所以需要对自己的孩子进行检查调整
        updateHeap(arr, largest)
    }
}

/**
 * 交换位置
 * @param {*} arr 原数组
 * @param {*} i 位置i
 * @param {*} j 位置j
 */
const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * 堆排序入口
 * @param {*} arr 
 */
const heapSort = (arr) => {
    // 组件最大堆
    buildMaxHeap(arr)
    for (let i = arr.length - 1; i >= 0; i--) {
        // 第一个和最后一个交换位置
        swap(arr, 0, i)
        // 每交换一次，长度减一
        len--;
        // 更新堆
        updateHeap(arr, 0)
    }
    return arr;
}

const res = heapSort([2, 9, 3, 7, 1, 6, 0])
console.log(res);