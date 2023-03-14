const express = require('express')
const app = express()


const port = 3000


app.use('/api/users', require('./routes/userRoutes.js'))
app.listen(port, () => console.log(`Kim Too's App is listening on ${port}!`))