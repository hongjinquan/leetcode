/**
 * 思路：遍历长度为n的数组
 * 1、第1次遍历n-1次，找到最小值然后跟第1位交换位置
 * 2、第2次遍历n-2次，找到最小值然后跟第2位交换位置
 * ...
 * n、第n-1次遍历1次，找到最小值然后跟第n-1位置交换位置
 */

const selectSort = (arrs) => {
    /**
     * 复杂度：
     * 1、时间复杂度：o(n^2)
     * 2、空间复杂度：o(1)
     * 稳定性：不稳定
     */
    let temp = undefined;
    console.time("selectSort")
    for (let i = 0; i < arrs.length - 1; i++) {
        let min_index = i;
        // i 为遍历的轮次
        for (let j = i + 1; j < arrs.length; j++) {
            // 数据比较，找到最小值后，标记索引值
            if (arrs[min_index] > arrs[j]) {
                min_index = j;
            }
        }
        if (min_index != i) {
            // 最小值跟 i 的位置交换
            temp = arrs[i]
            arrs[i] = arrs[min_index]
            arrs[min_index] = temp
        }
    }
    console.timeEnd("selectSort")
    return arrs;
}

const arrs = [1, 7, 8, 3, 2]
const res = selectSort(arrs)
console.log(res);