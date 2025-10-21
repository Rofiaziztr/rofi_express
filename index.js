const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/post', (req, res) => {
    res.send("Hello from POST")
})

app.put('/put', (req, res) => {
    res.send("Hello from PUT")
})

app.patch('/patch', (req, res) => {
    res.send("Hello from patch")
})

app.delete('/delete', (req, res) => {
    res.send("Hello from delete")
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})