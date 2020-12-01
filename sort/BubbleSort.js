// 冒泡排序：从第一个开始比较，较大的下沉，较小的上浮，知道数组为一个有序数组。
const bubbleSort = (arrs) => {
    /**
     * 复杂度：
     * 1、时间复杂度：o(n^2)
     * 2、空间复杂度：o(1)
     */
    console.time("start")
    let temp = undefined;
    // 冒泡排序需要比较(arrs.length-1)轮，每轮从头开始比较，然后上浮一个最小值
    for (let i = 0; i < arrs.length - 1; i++) {
        console.log("执行啦")
        // i为比较的轮次，第i轮次比较需要(arrs.length - (i+1))次
        for (let j = 0; j < arrs.length - (i + 1); j++) {
            if (arrs[j] < arrs[j + 1]) {
                // 交换位置
                temp = arrs[j]
                arrs[j] = arrs[j + 1]
                arrs[j + 1] = temp;
            }
        }
    }
    console.timeEnd("start")
    return arrs;
}

/**
 * 优化
 * @param {*} arrs 数组
 */
const bubbleSort_one = (arrs) => {
    console.time("start")
    // 特殊情况：如果arrs本来就为有序数组，则不需要排序，添加一个是否交换位置的标识
    let tag = false;
    let temp = undefined;
    for (let i = 0; i < arrs.length - 1; i++) {
        console.log("执行啦")
        // i为比较的轮次，第i轮次比较需要(arrs.length - (i+1))次
        for (let j = 0; j < arrs.length - (i + 1); j++) {
            if (arrs[j] < arrs[j + 1]) {
                // 交换位置
                temp = arrs[j]
                arrs[j] = arrs[j + 1]
                arrs[j + 1] = temp;
                // 标记，说明交换了位置
                tag = true;
            }
        }
        if (!tag) {
            // 当前轮次没有交换位置，则证明数组已经排好序了，直接终止
            break;
        }
        // 交换了位置，则说明数组还需要继续进行排序，设置tag为false状态，进如下一轮
        tag = false;
    }
    console.timeEnd("start")
    return arrs;
}

// const arrs = [3, 1, 2, 6, 9, 5]
const arrs = [9, 6, 5, 3, 2, 1]
// const res = bubbleSort(arrs)
const res = bubbleSort_one(arrs)
console.log(res);