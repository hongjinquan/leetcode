/**
 * 希尔排序，是插入排序的高性能改版
 * 思路：每次通过增量值，进行分组，比较；逐次递减，分组比较；直到增量为1，则终止
 * 解析：每次增量所组成的数据，都会进行插入排序操作，这样后边增量逐次递减过程中，重新分组，当增量为1时候，此时部分数据已经有序，
 *      这样就减少了交换位置，以至于效率更高。
 * 例子：3，4，5，1，6  
 *  第一轮（增量为2）：步数大，数量小，排序快；
 *      分组 3,5,6; 4,1; 
 *      排序后：3,1,5,4,6
 *  第二轮（增量为1）：基本有序，效率更高
 *      分组：3，1，5，4，6  
 *          注意：在分组后进行排序时候
 *                  3,1 -> 此时3大于1，3和1交换了位置
 *                  1,3,5 -> 此时5和3比较，因为在第一轮时候3，5，6已经是排好序的，所以此时5比较后，不做任何操作，直接跳到下一次，这样效率就提高了
 *      排序后：1，3，4，5，6 （结束）
 */

const shellSort = (arrs) => {
    /**
     * 算法复杂度：
     * 1、时间复杂度：o(n^（1.3—2）)
     * 2、空间复杂度：o(1)
     * 稳定与否：不稳定
     */
    let add_num = arrs.length;
    while (add_num != 1) {
        add_num = Math.ceil(add_num / 2)
        for (let i = 0; i < add_num; i++) {
            // i为比较的轮次
            for (let j = i; j < arrs.length;) {
                // 比较数据
                if (j + add_num >= arrs.length) {
                    break;
                }
                if (arrs[j] > arrs[j + add_num]) {
                    const temp = arrs[j]
                    arrs[j] = arrs[j + add_num]
                    arrs[j + add_num] = temp
                    tag = true;
                }
                j += add_num
            }
        }
    }
    return arrs;
}

// const arrs = [2, 1, 3, 4, 5]
const arrs = [2, 1, 3, 0, 5, 9, 20, 3, 6, 1]
const res = shellSort(arrs)
console.log(res);