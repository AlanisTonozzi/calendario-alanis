const temRole = require("./temRole")

describe("temRole", () =>{

	it("Recebe uma data em formato de string e retorna verdadeiro se for fds ", () => {
		expect(temRole("21/07/2018")).toEqual(true)
	})

	it("Recebe uma data em formato de string e retorna verdadeiro se for feriado ", () => {
		expect(temRole("09/07/2018")).toEqual(true)
	})

	it("Recebe uma data em formato de string e retorna falso se for dia da semana ", () => {
		expect(temRole("18/07/2018")).toEqual(false)
	})

	it("Recebe uma string invalida e joga um erro", () => {
		const fn = ()=> temRole("pizza")
		expect(fn).toThrow()
	})
	
	it("Recebe uma string vazia e joga um erro", ()=> {
		const fn = ()=> temRole("")
		expect(fn).toThrow()
	
	})

})
