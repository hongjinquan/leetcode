/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    /**
     * 方法一：遍历链表长度进行删除
     * 复杂度：
     * 1、时间复杂度：o(n)
     * 2、空间复杂: o(n)
     */
    // 找一个容器进行存储每个节点
    // const con_temp = []
    // while (head) {
    //     con_temp.push(head)
    //     head = head.next
    // }
    // if (!con_temp.length) {
    //     return null;
    // }
    // const index = con_temp.length - n;
    // if (index == 0) {
    //     return con_temp[1] ? con_temp[1] : null
    // }
    // const pre_node = con_temp[index - 1]
    // const next_node = con_temp[index + 1]
    // if (pre_node) {
    //     pre_node.next = next_node ? next_node : null;
    // }
    // return con_temp[0]

    /**
     * 方法二：快慢指针
     * 复杂度：
     * 1、时间复杂度：o(n)
     * 2、空间复杂度：o(1)
     */

    if (head == null) return null;
    let fast_p = head;
    let slow_p = head;
    // 让快指针比慢指针多走n步
    while (n) {
        fast_p = fast_p.next
        n--
    }
    if (!fast_p) {
        return head.next;
    }
    // 快慢指针开始同时走
    // ps：通过fast的next进行判断，这样slow才会是要删除节点的前一个
    while (fast_p.next) {
        fast_p = fast_p.next
        slow_p = slow_p.next
    }
    // 当fast_p为 null 时候，说明到了末端，此时慢指针正好处于倒数第n个位置
    // 删除slow_p指向的节点
    slow_p.next = slow_p.next.next
    return head
};
// @lc code=end