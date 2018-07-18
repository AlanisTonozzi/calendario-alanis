const toDate = require('./toDate')

/**
 * Verifica se tem role com o mozão nessa data.
 * Para ter role, a data precisa ser um final de semana ou feriado.
 *
 * @param {string} data - Data para ser verificada, no padrão DD/MM/YYYY
 * @returns {boolean}
 */
const temRole = dateStr => ehFinalDeSemana(dateStr) || ehFeriado(dateStr)

const DIAS_DA_SEMANA = ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO']
const ehFinalDeSemana = dateStr => {
	const date = toDate(dateStr)
	const diaDaSemana = DIAS_DA_SEMANA[date.getUTCDay()]
	return (diaDaSemana === 'SÁBADO' || diaDaSemana === 'DOMINGO')
}

// Reference: http://www.feriados.com.br/2018
const FERIADOS_2018 = 
	['01/01/2018', '25/01/2018', '30/03/2018', 
	 '21/04/2018', '01/05/2018', '31/05/2018', 
	 '09/07/2018', '07/09/2018', '12/10/2018', 
	 '02/11/2018', '15/11/2018', '20/11/2018', 
	 '25/12/2018']
const ehFeriado = dateStr => FERIADOS_2018.includes(dateStr)

module.exports = temRole