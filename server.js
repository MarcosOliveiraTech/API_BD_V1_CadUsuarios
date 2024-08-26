import express, { query } from 'express'
// Instalar recursos da biblioteca neste projeto, ativando seus recursos

// Importar recusos da biblioteca PRISMA para enviar ao BD
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... Escrever as propriedades dos usuários aqui
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

const app  = express ()
// Importar todas as informações da biblioteca

app.use(express.json())
// importar informações em Json para teste de usuários

// Teste de Cadastro de usuários

// Salvar usuários na variável USERS, listada à cima.
app.post('/usuarios', async (req,res) =>{
    // Requisção

    // promisse
    // await: Aguardar resposta do banco de dados
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    
    
    res.status(201).json(req.body) //Responder ao usuário que a atividade foi concluída com sucesso
})

// Listar na tela usuários cadastrados em lista JASON
app.get('/usuarios', async (req, res) => {
    
    let users = []

    if(req.query.name) {

        //Informar que a atividade foi concluída com sucesso
        users = await prisma.user.findMany({
            where: {
                name: {
                    contains: req.query.name, 
                    mode: 'insensitive'
                }
            
            },
        })

    } else {
        users = await prisma.user.findMany()
    }
    
    
    res.status(200).json(users); 

})
// Exibir usuários cadastrados


// Editar um usuário
app.put('/usuarios/:id', async (req,res) =>{
    // Requisção
    
    await prisma.user.update({
        where: {
            id: req.params.id
        },

        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    
    
    res.status(201).json(req.body) //Responder ao usuário que a atividade foi concluída com sucesso
})

// Deletar um usuário
app.delete('/usuarios/:id', async (req,res) =>{
    
    // Deletar nome em BD a partir do Login
    await prisma.user.delete({
        where: {
            id: req.params.id
        },

        
    })
    
    
    res.status(203).json({message:'usuario deletado'}) //Responder ao usuário que a atividade foi concluída com sucesso
})


app.listen(3000)
// Definir porta de comunicação do computador
