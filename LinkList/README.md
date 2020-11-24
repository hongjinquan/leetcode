### 链表
#### 简单介绍
> 链表是一种非连续、非顺序的存储结构，数据元素的逻辑结果是通过链表中的指针链接次序实现的。

#### 代码实现
```
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
```
#### 复杂度
1. 链表的插入以及删除操作不会随着链表的长度而变化，时间复杂度可达到 o(1)
2. 查找一个节点或者访问特定编号的节点，时间复杂度为o(n)

#### 分类
1. 单向链表

![avatar](https://img-blog.csdnimg.cn/20201124142845490.png)

2. 双向链表

![avatar](https://img-blog.csdnimg.cn/20201124142845471.png)

3. 循环链表

![avatar](https://img-blog.csdnimg.cn/20201124142845470.png)
