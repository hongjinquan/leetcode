/**
 * 基数排序
 * @param {*} arr 原数组
 * @param {*} maxDigit 当前数字中，数字的最大位数
 */
const counter = [];
const radixSort = (arr, maxDigit) => {
    /**
     * 算法复杂度：
     * 1、时间复杂度：对于给定的n个d位数，取值范围为[0,k]，我们使用基数排序比较元素的每一位，基数排序耗时Θ(n+k)，那么基数排序的复杂度为Θ(d(n+k))。
     * 2、空间复杂度：需要 k 个指向队列的辅助空间，以及用于静态链表的n个指针，则为o(k + n)
     *      k 为数的取值范围，分配bucket时，最大的bucket索引为k，所以为 o(k)；
     *      n 为存储在 每个bucket的个数 总和，也就是arr的长度，所以为o(n)
     *      总和下来为：o(k+n)
     * 稳定性：稳定
     */
    let dev = 1;  // 取整的除数，第1位为个位则为1，第2位为十位则为10，第d位为10^(d-1)
    let mod = 10; // 第1位为个位则为10，第2位为十位则为100，第d位为10^d
    // LSD: 最低位优先
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        // 根据当前的`位`，分配到不同的bucket中
        for (let j = 0; j < arr.length; j++) {
            // 获取当前`位`上的数值
            const bucket = parseInt((arr[j] % mod) / dev)
            if (!counter[bucket]) {
                counter[bucket] = [arr[j]]
            } else {
                counter[bucket].push(arr[j])
            }
        }
        let pos = 0;
        // 遍历 counter中的bucket，重新分配到arr中，则当前`位`已经按照从小到大排好序
        for (let c = 0; c < counter.length; c++) {
            if (counter[c]) {
                let value;
                // 重置原数组arr
                while ((value = counter[c].shift()) != undefined) {
                    arr[pos++] = value;
                }
            }
        }
    }
    return arr;
}

const res = radixSort([6, 3, 12, 9, 10, 1], 5)
console.log(res);