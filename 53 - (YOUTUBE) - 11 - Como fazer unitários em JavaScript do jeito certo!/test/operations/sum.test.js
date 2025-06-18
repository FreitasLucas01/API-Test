const { sum } = require('../../func')

describe('Operations test', () => {
    it('sum two numbers', () => {
        const result = sum(2,2)

        expect(result).toBe(4)
    })

    it('sum two negative numbers', () => {
        const result = sum(-2,-2)

        expect(result).toBe(-4)
    })

    it('sum with 0', () => {
        const result = sum(-2,0)

        expect(result).toBe(-2)
    })

    it('sum with letters', () => {
        // const result = sum(2,"a")

        // expect(result).toBe("Please include numbers only")

        expect(() => sum(5, "a")).toThrow("Please include numbers only");
    })

        it('sum with letters', () => {

        expect(() => sum("a", 5)).toThrow("Please include numbers only");
    })
})
