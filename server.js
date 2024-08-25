import express from 'express'
// Instalar recursos da biblioteca neste projeto, ativando seus recursos
const app  = express ()
// Importar todas as informações da biblioteca

app.use(express.json())
// importar informações em Json para teste de usuários

// Teste de Cadastro de usuários
// Definir uma lista com informações pré-cadastradas para testes de acesso
const users = []


// Salvar usuários na variável USERS, listada à cima.
app.post('/usuarios', (req,res) =>{
    // Requisção
    users.push(req.body)
    
    
    res.status(201).json(req.body) //Responder ao usuário que a atividade foi concluída com sucesso
})

// Listar na tela usuários cadastrados em lista JASON
app.get('/usuarios', (req, res) => {
    
    res.json(users)
    res.status(200).json(users) //Informar que a atividade foi concluída com sucesso

})
// Exibir usuários cadastrados


app.listen(3000)
// Definir porta de comunicação do computador
