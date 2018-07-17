/**
 * @param {Date} date
 * @returns {string} data no padrão DD/MM/YYYY
 */
const fromDate = date =>
	date.getDate().toString().padStart(2,"0") + 
	"/" + 
	(date.getMonth() + 1).toString().padStart(2,"0") + 
	"/" + 
	date.getFullYear()

module.exports = fromDate