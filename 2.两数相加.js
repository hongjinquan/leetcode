/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
// 个人理解（不对请帮忙纠错）
// 复杂度：
// 1、时间复杂度：o(n)
// 2、空间复杂度：o(n)
var addTwoNumbers = function (l1, l2) {
    let root = new ListNode(0);
    let cur_node = root;
    let new_tag = 0;
    while (l1 != null || l2 != null || new_tag != 0) {
        const l1_val = l1 == null ? 0 : l1.val
        const l2_val = l2 == null ? 0 : l2.val
        const new_val = l1_val + l2_val + new_tag;
        new_tag = new_val > 9 ? 1 : 0;

        const new_node = new ListNode(new_val % 10)
        cur_node.next = new_node
        cur_node = new_node

        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2 = l2.next;
    }
    return root.next
};
// @lc code=end

