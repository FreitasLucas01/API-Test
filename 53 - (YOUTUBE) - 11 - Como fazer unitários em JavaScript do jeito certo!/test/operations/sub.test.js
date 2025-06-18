const { sub } = require("../../func")

describe('Operations sub', () => {
    it('Sub two numbers', () => {
        const result = sub(5,3)

        expect(result).toBe(2)
    })

    it('Sub two negative numbers', () => {
        const result = sub(-5, -8)
        expect(result).toBe(3)
    })

    it('Sub with 0', () => {
        const result = sub(5,0)

        expect(result).toBe(5)
    })

    it('Sub with letters', () => {
        expect(() => sub(5, "a")).toThrow("Please include numbers only");
    })

    it('Sub with letters', () => {
        expect(() => sub("a", 5)).toThrow("Please include numbers only");
    })
})