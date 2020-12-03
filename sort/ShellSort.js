/**
 * 希尔排序，是插入排序的高性能改版
 * 思路：每次通过增量值，进行分组，比较；逐次递减，分组比较；直到增量为1，则终止
 * 解析：每次增量所组成的数据，都会进行插入排序操作，这样后边增量逐次递减过程中，重新分组，当增量为1时候，此时部分数据已经有序，
 *      这样就减少了交换位置，以至于效率更高。
 * 例子：1，4，5，3，6  
 *  -> 1,5,6; 4,3;(1,3,5,4,6) 这个阶段3，4，6已经排好序，当2和1比较时候，2大于1，交换位置，则3和6则不需要跟
 *  -> 1,2,3,5,6
 */

const shellSort = (arrs) => {
    let add_num = arrs.length;
    while (add_num != 1) {
        console.log("进来了");
        add_num = Math.ceil(add_num / 2)
        console.log("进来了 add_num", add_num);
        for (let i = 0; i < add_num; i++) {
            // i为比较的轮次
            console.log("进来了 i", i);
            for (let j = i; j < arrs.length;) {
                // 比较数据
                console.log("进来了 j", j);
                if (j + add_num >= arrs.length) {
                    break;
                }
                console.log(arrs[j], arrs[j + add_num])
                if (arrs[j] > arrs[j + add_num]) {
                    const temp = arrs[j]
                    arrs[j] = arrs[j + add_num]
                    arrs[j + add_num] = temp
                    tag = true;
                    console.log("排序换位置");
                }
                j += add_num
            }
        }
    }
    return arrs;
}

const arrs = [2, 1, 3, 4, 5]
const res = shellSort(arrs)
console.log(res);