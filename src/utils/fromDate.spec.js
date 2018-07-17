const fromDate = require("./fromDate.js")

describe('fromDate', () => {

	it('Deve converter uma data em uma string no formato DD/MM/YYYY', () => {
		const date = new Date(2018, 11, 16)
		expect(fromDate(date)).toEqual("16/12/2018")
	})

	it('Deve colocar zeros a mais caso o dia ou o mês só tenha um dígito', () => {
		const mesComUmDigito = new Date(2018, 6, 16)
		const diaComUmDigito = new Date(2018, 11, 1)

		expect(fromDate(mesComUmDigito)).toEqual('16/07/2018')
		expect(fromDate(diaComUmDigito)).toEqual('01/12/2018')
	})

})