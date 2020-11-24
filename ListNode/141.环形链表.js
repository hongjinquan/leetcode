/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // 所谓的环，说明有重叠部分
    // 方法1：利用set集合
    /**
     * 复杂度：
     * 1、时间复杂度：o(n) 会随着节点的next的个数增加而增加
     * 2、空间复杂度：o(n) set中的容量会随着next的个数增加而增加
     */
    // const set_temp = new Set()
    // while (head != null) {
    //     if (set_temp.has(head)) {
    //         return true;
    //     }
    //     set_temp.add(head)
    //     head = head.next;
    // }
    // return false

    // 方法2：快慢指针
    /**
     * 复杂度：
     * 1、时间复杂度：o(n) 会随着节点的next的个数增加而增加
     * 2、空间复杂度：o(1) 只申明了两个指针变量
     */
    if (head == null) {
        return false
    }
    let fast_point = head;
    let slow_point = head;
    while (fast_point != null && fast_point.next != null) {
        // 慢指针走一步
        slow_point = slow_point.next;
        // 快指针走两步
        fast_point = fast_point.next.next;
        if (fast_point == slow_point) {
            // 相遇
            return true;
        }
    }
    // 不相遇
    return false;
};
// @lc code=end

