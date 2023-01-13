function is_equal (arr1,arr2) {
    const is_array1 = Array.isArray(arr1)
    const is_array2 = Array.isArray(arr2)
    if (!is_array1 || !is_array2) {
        throw new Error(`one of the array's is not array. array1 = ${arr1} array2 = ${arr2}`)
    }
    arr1.sort(function(a, b){return a - b});
    arr2.sort(function(a, b){return a - b});
    if (arr1.length != arr2.length) {
        return false
    }
    else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false
            } 
        }
        return true
    }

}

function is_bigger(num1, num2) {
    if (num1 == NaN || num2 == NaN) {
        throw new Error(`something went wrong with number you gave. num1 =${num1} and num2 =${num2} `)
    }
    if (num1 > num2) {
        return true
    }
    return false
}

module.exports = {
    is_equal,
    is_bigger
}