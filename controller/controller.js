import express from 'express'

import model from '../model/model.js'

async function cadastrar(req, res){
  var pessoa = {
    nome: req.body.nome,
    email: req.body.email
  }
  model.cadastrar(pessoa)
  res.redirect('/')
}

async function listar(req, res) {
  var mostrar = await model.listar()
  console.log(mostrar)
  res.render('cadastrar', { Dados: mostrar })
}

export default { cadastrar, listar }