/**
 * Transforma uma string no formato DD/MM/YYYY em Date.
 *
 * @param {string} str - Data em string no formato DD/MM/YYYY
 * @returns {Date} 
 */
const toDate = str => {
	if (str === undefined) throw new Error('Data tem que ser especificada.')
	if (!/^\d{2}\/\d{2}\/\d{4}$/.test(str)) throw new Error('A string é inválida')

	const [dia, mes, ano] = str.split('/').map(s => parseInt(s)) 
	return new Date(ano, mes-1, dia)

	/*
	const array = str // '16/08/2018'
		.split('/') // ["16", "08", "2018"] 
		.map(s => parseInt(s)) // [16, 8, 2018]
	const ano = array[2]
	const mes = array[1]
	const dia = array[0]
	*/
}

module.exports = toDate
