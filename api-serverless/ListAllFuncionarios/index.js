/**
 * Arquivo: GetFuncionarios/index.js
 * Data: 30/05/2020
 * Descrição: arquivo responsável por listar todos os 'Funcionários'
 *
 * Digitar o snippet: crud-serverless-list
 */

const createMongoClient = require('../config/mongo')

module.exports = async context => {
  const { db, connection } = await createMongoClient()


  const Funcionarios = db.collection('funcionarios')
  const res = await Funcionarios.find({})
  const body = await res.toArray()

  connection.close()

  context.res = {
    status: 200,
    body
  }
}
