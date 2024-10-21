
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const criarContato = async (nome, sobrenome, email) => {
  const contato = await prisma.contato.create({
    data: {
      nome,
      sobrenome,
      email
    }
  })
  
  return contato;
}

const listarContato = async () => {
  const buscarContato = await prisma.contato.findMany();
  return buscarContato;
}

module.exports = { criarContato, listarContato};
