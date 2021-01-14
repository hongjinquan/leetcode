function IsContinuous(numbers) {
    // 为非零数组
    const no_zero_zrr = numbers.filter(item => item != 0)
    // 判断是否有对子
    // 建set集合
    const set = new Set(no_zero_zrr)
    if (set.size !== no_zero_zrr.length) {
        return false;
    }
    // 没有对子，判断最大值和最小值差值是否最大为4
    const max_num = Math.max(...no_zero_zrr)
    const min_num = Math.min(...no_zero_zrr)
    if (max_num - min_num > 4) {
        return false;
    }
    return true;
}

const res = IsContinuous([1, 2, 2, 4, 5])
console.log(res);