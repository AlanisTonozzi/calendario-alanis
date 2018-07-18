const pegarDias = require("./pegarDias")

describe("pegarDias", () => {

	it("Recebe uma string no formato DD/MM/YYYY e converte em um array de string ", () => {
		const actual = pegarDias("17/07/2018", "20/07/2018")
		const expected = ["17/07/2018","18/07/2018","19/07/2018","20/07/2018"]
		expect(actual).toEqual(expected)
	})

	it("recebe coisas erradas e da erro",() => {
		const fn = ()=> pegarDias("17/07/2018")
		expect(fn).toThrow()
	})

	it("recebe um nada e da erro",() => {
		const fn = ()=> pegarDias()
		expect(fn).toThrow()
	})
})


