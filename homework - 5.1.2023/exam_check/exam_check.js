function grade_validator(grade) {
    if (isNaN(grade) || grade === ""){
        throw new Error(`${grade} is not a number`)
    }
    if (grade >= 0 && grade <= 100) {
        return true
    }
    return false
}

module.exports = {
    grade_validator
}