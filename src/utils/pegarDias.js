const toDate = require('./toDate')
const fromDate = require('./fromDate')

/**
 * Retorna uma lista de datas entre o início (inclusivo) e fim (inclusivo)
 *
 * @param {string} inicio - Data de início (inclusiva), no padrão DD/MM/YYYY
 * @param {string} fim - Data de término (inclusiva), no padrão DD/MM/YYYY
 * @returns {Array<string>} Datas nesse intervalo, no padrão DD/MM/YYYY
 */
const pegarDias = (inicio, fim) => {
	if (typeof inicio !== 'string' || typeof fim !== 'string') throw new Error('Argumentos inválidos')

	const inicioDate = toDate(inicio)
	const fimDate = toDate(fim)
	const datas = [inicio]
	let data = inicio

	while(data !== fim) {
		const date = toDate(data)
		date.setDate(date.getDate() + 1)
		data = fromDate(date)
		datas.push(data)
	}

	return datas
}

module.exports = pegarDias