import express from 'express'
import { createEnvelope, findEnvelope, changeEnvelope, deleteEnvelope } from './utils.js'
const app = express()

const PORT = process.env.PORT || 3000

const totalBudget = 62_500
const envelopes = [
    {
        id: 1,
        title: "Food",
        budget: 15_000
    }
]

app.use(express.json());

app.get('/personal-budget', (req, res) => {
    res.send(envelopes)
})

app.get('/personal-budget/:id', (req, res) => {
    const id = Number(req.params.id)
    const specificEnvelope = findEnvelope(id, envelopes)
    
    res.send(specificEnvelope)
})

app.post('/personal-budget', (req, res) => {
    const title = req.body.title
    const budget = req.body.budget
    
    const newEnvelop = createEnvelope(title, budget)
    envelopes.push(newEnvelop)

    res.status(201).send(newEnvelop)
})

app.post('/personal-budget/:id/changes', (req, res) => {
    // Sends request body: { amount: 500 } <- example
    const id = Number(req.params.id)
    const newTitle = req.body.newTitle
    const amount = req.body.amount

    const updatedEnvelope = changeEnvelope(id, envelopes, newTitle, amount)
    res.send(updatedEnvelope)
})

app.delete('/personal-budget/:id', (req, res) => {
    const id = Number(req.params.id)
    deleteEnvelope(id, envelopes)

    res.status(200).send(envelopes)
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

