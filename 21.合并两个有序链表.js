/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    /**
     * 算法复杂度：
     * 1.时间复杂度：o(n) n=max(l1.length, l2.length)
     * 2.空间复杂度：o(1) 只是申明了两个变量
     */
    let new_node = new ListNode()
    let cur_node = new_node
    while (l1 != null && l2 != null) {
        // 都不为null的情况
        if (l1.val < l2.val) {
            cur_node.next = l1;
            cur_node = cur_node.next;
            l1 = l1.next;
            continue;
        } else {
            // l1.val >= l2.val
            cur_node.next = l2;
            cur_node = cur_node.next;
            l2 = l2.next;
        }
    }
    if (l1 == null) {
        // l1节点为null
        cur_node.next = l2;
    }
    if (l2 == null) {
        // l2节点为null
        cur_node.next = l1;
    }
    return new_node.next;
};
// @lc code=end

