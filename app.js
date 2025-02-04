import express from 'express'
const app = express()

const PORT = process.env.PORT || 3000

const envelopes = [
    {
        id: 
    }
]
const totalBudget = 62_500

app.get('/personal-budget', (req, res) => {
    res.send('Hello TEST!')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
