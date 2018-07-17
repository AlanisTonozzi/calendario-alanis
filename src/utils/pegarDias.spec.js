const pegarDias = require("./pegarDias.js")

describe("pegarDias", () => {

	it("Recebe uma string no formato DD/MM/YYYY e converte em um array de string ", () => {
		expect(pegarDias("17/07/2018", "20/07/2018")).toEqual(["17/07/2018","18/07/2018","19/07/2018","20/07/2018"])
	})

	it("Recebe uma string no formato DD/MM/YYYY e converte em um array de string ", () => {
		expect(pegarDias("17/07/2018", "20/07/2018")).toEqual([17,7,2018],[20,7,2018])
	})

})