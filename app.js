const express = require('express')
const app = express()

const modeloCargos = require('./models').Cargo
const modeloMembers = require('./models').Members

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//crear cargo
app.post('/crearcargos', (req, res) => {
    modeloCargos.create(req.body)
        .then((data) => {
            res.json({ datos: data })
        })
        .catch((error) => {
            res.json({ error: error })
        })
})

//crear miembro
app.post('/crearmembers', (req, res) => {
    modeloMembers.create(req.body)
        .then((data) => {
            res.json({ datos: data })
        })
        .catch((error) => {
            res.json({ error: error })
        })
})

//mostrar

app.get('/mostrarmembers', (req, res) => {
    modeloMembers.findAll({
            include: [{ model: modeloCargos }]
        })
        .then((data) => {
            res.json({ datos: data })
        })
        .catch((error) => {
            res.json({ error: error })
        })
})

// actualizar

app.put('/editarmembers/:id', (req, res) => {
    modeloMembers.update(req.body, {
            where: { id: req.params.id }
        })
        .then((data) => {
            res.json({ datos: data })
        })
        .catch((error) => {
            res.json({ error: error })
        })
})

//eliminar 

app.delete('/eliminarmembers/:id', (req, res) => {
    modeloMembers.destroy({
            where: { id: req.params.id }
        })
        .then((data) => {
            res.json({ datos: data })
        })
        .catch((error) => {
            res.json({ error: error })
        })
})


app.listen(3000, () => {
    console.log('Server UP running in http://localhost:3000')
})