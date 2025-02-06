import express from 'express'
import { createEnvelope } from './utils.js'
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

app.get('/personal-budget', (req, res) => {
    res.send('Hello TEST!')
})

app.post('/personal-budget', (req, res) => {
    const title = req.query.title
    const budget = req.query.budget
    
    const newEnvelop = createEnvelope(title, budget)
    envelopes.push(newEnvelop)

    res.status(201).send(newEnvelop)
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
