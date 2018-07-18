const datasComRole = require("./datasComRole")

describe("datasComRole", () => {
	
	it("Recebe strings com datas e retorna as datas que tem role", () => {
		expect(datasComRole("13/07/2018","16/07/2018")).toEqual(["14/07/2018","15/07/2018"])
	})

})