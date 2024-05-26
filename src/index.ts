import express from 'express'
const app = express()

app.use(express.json())

app.get('/ping', (_req, res) => {
    res.send('pong')
    console.log('Someone pinged here at:' + new Date().toString())
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})