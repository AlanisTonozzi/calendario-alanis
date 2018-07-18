const express = require('express') 
const utils = require('./utils')

const server = express() //cria servidor


server.use('/hi', (req,res) => {
	const data = { 
		data: 'Hello world!' 
	}
	res.header("Content-Type", "application/json")

	res.status(200).send(JSON.stringify(data))
})


server.use('/ping', (req,res) => {
	res.status(200).end()
})

server.use("/ultimos-30",(req,res) => {
	const hoje = utils.fromDate(new Date())
	const trintaAtrasDate = new Date()
	trintaAtrasDate.setDate((new Date()).getDate() - 30)
	const trintaAtras = utils.fromDate(trintaAtrasDate)

	const roles = utils.datasComRole(trintaAtras, hoje)
	const data = { data: roles }

	res.header("Content-Type", "application/json")
	res.status(200).send(JSON.stringify(data))
})


server.use((req,res) => {
	const data = {
		errors: [
			{
				message: 'Rota inválida'
			}
		]
	}
	res.header("Content-Type","application/json")
	res.status(404).send(JSON.stringify(data))
})



server.listen(3000, () => console.log("servidor rodando na porta 3000"))
