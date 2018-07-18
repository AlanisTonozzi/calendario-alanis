const pegarDias = require("./pegarDias")
const temRole = require("./temRole")

/**
 * Retorna as datas que tem role entre o início (inclusivo) e fim (inclusivo)
 *
 * @param {string} inicio - Data de início (inclusiva), no padrão DD/MM/YYYY
 * @param {string} fim - Data de término (inclusiva), no padrão DD/MM/YYYY
 * @returns {Array<string>} Datas com role
 */
const datasComRole = (inicio, fim) =>
	pegarDias(inicio, fim).filter(temRole)

module.exports = datasComRole