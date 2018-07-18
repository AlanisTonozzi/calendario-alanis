const toDate = require("./toDate")

describe("toDate", () => {

	it("Recebe uma string no formato DD/MM/YYYY e converte em uma data", () => {
		expect(toDate("17/07/2018") instanceof Date).toEqual(true)
	})

	it('Dá erro se eu não passar nada', () => {
		const fn = () => toDate()
		expect(fn).toThrow()
	})

	it('Dá erro se eu passar uma string inválida ou no formato errado', () => {
		const fn = () => toDate("batata")
		expect(fn).toThrow()
	})

})







