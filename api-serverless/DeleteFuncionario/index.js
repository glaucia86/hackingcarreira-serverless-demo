// @ts-nocheck
/**
 * Arquivo: DeleteFuncionario/index.js
 * Data: 30/05/2020
 * Descrição: arquivo responsável excluir um 'Funcionário' pelo Id
 *
 * Digitar o snippet: crud-serverless-delete
 */

const { ObjectID } = require('mongodb')
const createMongoClient = require('../config/mongo')

module.exports = async function (context, req) {
  const { id } = req.params

  if (!id) {
    context.res = {
      status: 400,
      body: 'Os campos são obrigatórios!'
    }

    return
  }

  const { db, connection } = await createMongoClient()

  const Funcionarios = db.collection('funcionarios')

  try {
    await Funcionarios.findOneAndDelete({ _id: ObjectID(id) })
    connection.close()
    context.res = {
      status: 204,
      body: 'Funcionário excluído com sucesso!'
    }
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Erro ao excluir Funcionário' + id
    }
  }
}
