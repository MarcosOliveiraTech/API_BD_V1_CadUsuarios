import express from 'express'
// Instalar recursos da biblioteca neste projeto, ativando seus recursos
const app  = express ()
// Importar todas as informações da biblioteca

app.get('/usuarios', (req, res) => {
    
    res.send('servidor no ar')

})
// Exibir usuários cadastrados


app.listen(3000)
// Definir porta de comunicação do computador
