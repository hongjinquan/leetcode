const quickSort = (arrs, l, r) => {
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