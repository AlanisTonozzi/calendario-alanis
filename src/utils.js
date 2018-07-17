





/**
 * Verifica se tem role com o mozão nessa data.
 * Para ter role, a data precisa ser um final de semana ou feriado.
 *
 * @param {string} data - Data para ser verificada, no padrão DD/MM/YYYY
 * @returns {boolean}
 *
 * @example
 * temRole('16/07/2018') // false, é uma segunda-feira e não é feriado
 *
 * @example
 * temRole('14/07/2018') // true, é um sábado
 */
const temRole = data => {



}

/**
 * Retorna uma lista de datas entre o início (inclusivo) e fim (inclusivo)
 *
 * @param {string} inicio - Data de início (inclusiva), no padrão DD/MM/YYYY
 * @param {string} fim - Data de término (inclusiva), no padrão DD/MM/YYYY
 * @returns {Array<string>} Datas nesse intervalo, no padrão DD/MM/YYYY
 */
const pegarDias = (inicio, fim) => {
	
}

/**
 * Retorna as datas que tem role entre o início (inclusivo) e fim (inclusivo)
 *
 * @param {string} inicio - Data de início (inclusiva), no padrão DD/MM/YYYY
 * @param {string} fim - Data de término (inclusiva), no padrão DD/MM/YYYY
 * @returns {Array<string>} Datas com role
 */
const datasComRole = (inicio, fim) =>
	pegarDias(inicio, fim).filter(temRole)


module.exports = { datasComRole }
