/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
    // 哈希表 + 二分法 进行实现
    /**
     * 思路：
     * 1、A、B中的进行组合，同时存储到map1中；
     * 2、C、D中的进行组合，取反后从map1中进行查询。
     * 
     * 复杂度：
     * 1、时间复杂度: o(2* n^2) ~ o(n^2)
     * 2、空间复杂度：o(n^2)
     *   2.1、A和B集合中，元素组合后的sum，个数可能会到达 n * n 数量级
     *   2.2、其他变量只是常数级别o(1)，可忽略
     */
    const map_temp = new Map()
    let result = 0;
    for (let i = 0, a_length = A.length; i < a_length; i++) {
        for (let j = 0, b_length = B.length; j < b_length; j++) {
            const sum = A[i] + B[j]
            if (!map_temp.has(sum)) {
                map_temp.set(sum, 1)
                continue
            }
            map_temp.set(sum, map_temp.get(sum) + 1)
        }
    }

    for (let i = 0, c_length = C.length; i < c_length; i++) {
        for (let j = 0, d_length = D.length; j < d_length; j++) {
            const sum_obs = -(C[i] + D[j])
            if (map_temp.has(sum_obs)) {
                result += map_temp.get(sum_obs)
            }
        }
    }

    return result
};
// @lc code=end

