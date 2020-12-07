/**
 * 归并排序
 * @param {*} arrs 原数组
 * @param {*} left 开始位置
 * @param {*} right 结束位置
 * @param {*} temp 临时数组
 */
const mergeSort = (arrs, left, right, temp) => {
    /**
     * 思路：(基本思路应为两个有序数组进行合并)
     * 1、现将数组中 arrs[left] 到 arrs[right]的数据进行拆分，知道拆分到数组的个数为1；
     * 2、因为数组个数为1，则自身为有序，此时将两个数组长度为1的进行合并，然后逐层返回有序数组再合并，直到返回到最顶层，则合并完成，完成排序
     * 复杂度：
     * 1、时间复杂度：o(n*log^n)
     * 2、空间复杂度：o(n)，因为申明了一个临时数组temp
     * 稳定性：稳定
     */
    let middle = Math.floor((left + right) / 2)
    if (left < right) {
        // 左指针小于右指针时候，递归执行，继续执行拆分
        // 拆左
        mergeSort(arrs, left, middle, temp)
        // 拆左
        mergeSort(arrs, middle + 1, right, temp)
        // 左右合并
        mergeCombine(arrs, left, middle, right, temp)
    }
}

/**
 * 合并两个有序数组
 * @param {*} arrs 原数组
 * @param {*} start 开始位置
 * @param {*} middle 中间位置
 * @param {*} end 结束位置
 * @param {*} temp 临时数组
 */
const mergeCombine = (arrs, start, middle, end, temp) => {
    let i = start, m = middle, j = middle + 1, n = end;
    let k = 0;
    // 比较两个数组，将小的值放到temp临时数组中，直到其中一个遍历完成
    while (i <= m && j <= n) {
        if (arrs[i] <= arrs[j]) {
            temp[k] = arrs[i]
            i++;
            k++;
        } else {
            temp[k] = arrs[j]
            j++;
            k++;
        }
    }
    // 如果左分割数组长度长，剩余的依次补全到temp后
    while (i <= m) {
        temp[k] = arrs[i]
        i++;
        k++;
    }
    // 如果右分割数组长度长，剩余的依次补全到temp后
    while (j <= n) {
        temp[k] = arrs[j]
        j++;
        k++
    }
    // 将temp临时数组拼接到原始数组中，如果start和end，是截取的数组中的一段进行排序，则start前的和end后的数据不会进行排序
    for (let ii = 0; ii < k; ii++) {
        arrs[start + ii] = temp[ii]
    }
}

const arrs = [9, 6, 8, 2, 4, 1, 0, 10]

mergeSort(arrs, 0, arrs.length - 1, [])

console.log(arrs);