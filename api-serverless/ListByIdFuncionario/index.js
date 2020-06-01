// @ts-nocheck
/**
 * Arquivo: GetFuncionarioById/index.js
 * Data: 30/05/2020
 * Descrição: arquivo responsável por listar Funcionário pelo Id
 *
 * Digitar o snippet: crud-serverless-listOne
 */

const { ObjectID } = require('mongodb')
const createMongoClient = require('../config/mongo')

module.exports = async function (context, req) {
  const { id } = req.params

  if (!id) {
    context.res = {
      status: 400,
      body: 'Por favor, passe o número correto do Id do Funcionário!'
    }

    return
  }

  const { db, connection } = await createMongoClient()

  const Funcionarios = db.collection('funcionarios')

  try {
    const body = await Funcionarios.findOne({ _id: ObjectID(id) })

    connection.close()
    context.res = {
      status: 200,
      body
    }
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Erro ao listar o Funcionário pelo Id.'
    }
  }
}
