const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors');
const dbConnect = require('./config/dbConnect');
const authRoutes = require('./routes/authRoutes.js')
const userRoutes = require('./routes/userRoutes.js')

const app = express();
dbConnect();

// middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 4321

app.get('/', (req, res) =>{
    res.send(`Hello, This is app for basic User Roles Authorization`)
})

app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`)
})





