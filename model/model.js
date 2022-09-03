import { promises as fs } from "fs";
async function cadastrar(pessoa) {
  var dados = JSON.parse(await fs.readFile("./data/cadastro.json"));
  dados.cadastro.push({
    id: dados.nextId,
    name: pessoa.nome,
    email: pessoa.email,
  }),
    dados.nextId++;
  fs.writeFile("./data/cadastro.json", JSON.stringify(dados, null, 2));
}

async function listar() {
  var dados = JSON.parse(await fs.readFile("./data/cadastro.json"));
  return dados.cadastro;
}

export default { cadastrar, listar };