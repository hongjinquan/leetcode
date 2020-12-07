const quickSort = (arrs, l, r) => {
    /**
     * 描述：快速排序是冒泡的优化版本
     * 思路：1、首先随意取一个目标值，一般为当前数组的第一个元素，此时第一个为空位，然后设置左右两个指针变量；
     *      2、然后先从后往前比较（右往左），遇到小于目标值的值，将其移入之前的空位，然后此时空位则为当前值所在的位置，左指针加1；
     *      3、切换比较方向，从前往后比较（左往右），遇到大于目标值的值，将其移入之前的空位，然后此时空位则为当前值所在的位置，右指针加1；
     *      4、当左指针大于等于右指针时，将目标值移入此时的空位；
     *      5、将数组切分为两份，分别循环执行上述步骤，直到切分后的数组个数为1，则说明此时数组已经排好序了，此时则终止
     * 复杂度：
     * 1、时间复杂度：o(n * log^n)
     * 2、空间复杂度：o(log^n) 递归函数需要栈空间，栈空间的大小取决于递归的深度
     * 稳定度：不稳定
     */
    if (l >= r) {
        return;
    }
    const key = arrs[l];
    let i = l, j = r;
    while (i < j) {
        while (i < j && arrs[j] >= key) {
            j--
        }
        // arr[j] < key
        if (i < j) {
            // 把a[i]的空填满，a[j]空出来
            arrs[i] = arrs[j]
            i++
        }

        while (i < j && arrs[i] <= key) {
            i++
        }
        if (i < j) {
            arrs[j] = arrs[i]
            j--
        }
    }
    // i == j时候，把key放入到终结位置
    arrs[i] = key;
    
    quickSort(arrs, l, i - 1)

    quickSort(arrs, i + 1, r)
}

const arrs = [3, 2, 6, 8, 1, 0, 9, 7]

// const arrs = [1, 2, 3, 5]

quickSort(arrs, 0, arrs.length - 1)

console.log(arrs);