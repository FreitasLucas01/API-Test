const { mult } = require('../../func')

describe('Operations mult', () => {
    it('Mult two numbers', () => {
        const result = mult(5,5)
        expect(result).toBe(25)
    })

    it('Mult two negative numbers', () => {
        const result = mult(-5,-5)
        expect(result).toBe(25)
    })

    it('Mult with 0', () => {
        const result = mult(5,0)
        expect(result).toBe(0)
    })

    it('Mult with 0', () => {
        const result = mult(0,5)
        expect(result).toBe(0)
    })

    it('Mult with letter', () => {
        expect(() => mult(100,"f")).toThrow("Please include numbers only");
    })

    it('Mult with letter', () => {
        expect(() => mult("f",100)).toThrow("Please include numbers only");
    })
})