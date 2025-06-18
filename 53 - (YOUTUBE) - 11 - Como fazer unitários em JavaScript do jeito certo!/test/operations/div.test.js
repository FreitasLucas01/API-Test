const { div } = require('../../func')

describe("Operations division", () => {
    it('Div two numbers', () => {
        const result = div(100,10)

        expect(result).toBe(10)
    })

    it('Div negative numbers', () => {
        const result = div(-100, -10)
        expect(result).toBe(10)
    })

    it('Div with 0', () => {
        expect(() => div(100,0)).toThrow("Division by zero is not allowed");
    })

    it('Div with 0', () => {
        const result = div(0, 10)
        expect(result).toBe(0)
    })

    it('Div with letters', () => {
        expect(() => div(100,"d")).toThrow("Please include numbers only");
    })

    it('Div with letters', () => {
        expect(() => div("d",100)).toThrow("Please include numbers only");
    })
})