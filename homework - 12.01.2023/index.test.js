const assert = require('assert')
const expect = require('chai').expect
const func_exp = require('./index')


//function is_equal
describe('Testing basic functionality of the is_equal function' ,() => {

    it('testing if its works when geting all equal parameters [[1,2,3],[1,2,3]] ', () => {
  
        const actual = func_exp.is_equal([1,2,3], [1,2,3])

        const expected = true

        assert.strictEqual(expected , actual)
    }),

    it('testing if the function return false by getting different parameters [[1,2,3],[4,5,6]]', () => {

        const actual = func_exp.is_equal([5,2,3], [4,5,6])

        const expected = false

        assert.strictEqual(expected , actual)
    }),

    it('checking if the function returns false by getting different equal arrays [[1,1,1],[2,2,2]]', () => {

        const actual = func_exp.is_equal([8,8,8], [9,9,9])

        const expected = false

        assert.strictEqual(expected , actual)
    }),

    it('testing if its works when geting all equal parameters [[1,2,3],[1,2,3]]', () => {

        const actual = func_exp.is_equal([100,101,102],[100,101,102])

        const expected = true

        assert.strictEqual(expected , actual)
    }),

    it('testing if its works by geting arrays with different lengths [[1,2,3],[4,5,6,7]]', () => {

        const actual = func_exp.is_equal([1,2,3], [4,5,6,7])

        const expected = false

        assert.strictEqual(expected , actual)
    }),

    it('testing if we getting error by giving array and a number [[1,2,3],4]', () => {
        
        assert.throws(() => {
            func_exp.is_equal([1,2,3], 4)
        })

    }),

    it('testing if we getting error by giving number and then an array [9,[4,5,6]]', () => {

        assert.throws(() => {    
            func_exp.is_equal(41, [42,43,44])
        })
    }),

    it('testing if we getting error by giving array and a number [[1,2,3],4]', () => {

        assert.throws(() => {    
            func_exp.is_equal([20,21,22,23,24], 118)
        })
    })
});

//function is_bigger

describe('Testing basic functionality of the is_bigger function' ,() => {

    it('testing if its works when the first number is bugger then number two [3,2] ', () => {
  
        const actual = func_exp.is_bigger(3, 2)

        const expected = true

        assert.strictEqual(expected , actual)
    }),

    it('testing if the function return false getting bigger number than the first one [5,10]', () => {

        const actual = func_exp.is_bigger(10, 20)

        const expected = false

        assert.strictEqual(expected , actual)
    }),

    it('checking if the function returns false when the numbers are equals [3,3]', () => {

        const actual = func_exp.is_bigger(5, 5)

        const expected = false

        assert.strictEqual(expected , actual)
    }),

    it('testing if the function returns false by getting number and a string [1,"hello"]', () => {

        assert.throws(() => {
            func_exp.is_bigger(1, hello)
        })
    }),

    it('testing if the function returns false by getting string and a number ["bye", 2]', () => {

        assert.throws(() => {
            func_exp.is_bigger(bye, 2)
        })
    }),

    it('testing if the function returns false by getting two strings ["one","two"]', () => {
        
        assert.throws(() => {
            func_exp.is_bigger(first, second)
        })

    })
});