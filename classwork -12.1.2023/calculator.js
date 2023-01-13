const add = (num1, num2) => {
    // add-on
    if (num1 == 0 || num2 == 0) {
        return 
    }
    
    return num1 + num2
}

const sub = (num1, num2) => {
    return num1 - num2
}

// add this:
// mul
// div 

const multi = (num1,num2) => {
    
    if (num1 == 0 || num2 == 0) {
        throw new Error('cannot be zero')
    }
    return num1 * num2
}

const divid = (num1,num2) => {
    
    if (num1 == 0 || num2 == 0) {
        return Error('cannot be zero')
    }
    return num1 / num2
}

module.exports = {
    add, sub
    ,multi, divid
}