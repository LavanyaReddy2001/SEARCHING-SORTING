
function string_sort (str) {
    let i = 0,
        j
    while (i < str.length) {
        j = i + 1
        while (j < str.length) {
        if (str[j] < str[i]) {
            let temp = str[i]
            str[i] = str[j]
            str[j] = temp
        }
        j++
        }
        i++
    }
    }
    

    let string = ['Lavanya', 'Archana', 'Jana', 'Yashna', 'Viraj']
    console.log('Original String')
    console.log(string)
    string_sort(string)
    console.log('After sorting')
    console.log(string)
    