const assert = require('assert')
const expect = require('chai').expect
const checker = require('./exam_check')

describe('Testing a function that checks if the final grade of the student' ,() => {

    it('checking if its possible to get grade [0] should return true', () => {
        // A A A
        const actual = checker.grade_validator(0)

        // actual result ==? expected result
        const expected = true

        assert.strictEqual(expected , actual)
    }),

    it('checking if its possible to get grade [20] should return true', () => {
        // A A A
        const actual = checker.grade_validator(20)

        // actual result ==? expected result
        const expected = true

        assert.strictEqual(expected , actual)
    }),

    it('checking if its possible to get grade [40] should return true', () => {
        // A A A
        const actual = checker.grade_validator(40)

        // actual result ==? expected result
        const expected = true

        assert.strictEqual(expected , actual)
    }),

    it('checking if its possible to get grade [60] should return true', () => {
        // A A A
        const actual = checker.grade_validator(60)

        // actual result ==? expected result
        const expected = true

        assert.strictEqual(expected , actual)
    }),

    it('checking if its possible to get grade [80] should return true', () => {
        // A A A
        const actual = checker.grade_validator(80)

        // actual result ==? expected result
        const expected = true

        assert.strictEqual(expected , actual)
    }),

    it('checking if its possible to get grade [100] should return true', () => {
        // A A A
        const actual = checker.grade_validator(100)

        // actual result ==? expected result
        const expected = true

        assert.strictEqual(expected , actual)
    }),

    it('checking if its possible to get grade lower than 100 [-2000] should return false', () => {
        // A A A
        const actual = checker.grade_validator(-2000)

        // actual result ==? expected result
        const expected = false

        assert.strictEqual(expected , actual)
    }),

    it('checking if its possible to get grade higher [500] should return false', () => {
        // A A A
        const actual = checker.grade_validator(500)

        // actual result ==? expected result
        const expected = false

        assert.strictEqual(expected , actual)
    }),

    it('checking if its possible to set grade as string ["hello"] should return error', () => {
 
        assert.throws(() =>{
            checker.grade_validator("hello")
        })

    }),

    it('checking if its possible to set grade as null [""] should return error', () => {
        // didnt found how to set null so i wondered if its an acceptable solution
        assert.throws(() =>{
            checker.grade_validator(null)
        })

    })
})