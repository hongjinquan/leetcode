const huiwen = (str) => {
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (str.length - j < 2) {
                continue;
            }
            const str_children = str.substr(j, str.length - (i + 1))
            const str_arr = str_children.split("")
            const new_str = str_arr.reverse().join("")
            if (new_str == str_children) {
                return str_children
            }
        }
    }
    return ""
}

const str = "wadfefda"
const res = huiwen(str)
console.log(res)