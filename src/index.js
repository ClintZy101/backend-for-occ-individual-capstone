const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors');
const dbConnect = require('./config/dbConnect');
const authRoutes = require('./routes/authRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const productRoutes = require('./routes/productRoutes.js')
const paymentRoutes = require('./routes/stripeRoutes.js')
const orderRoutes = require('./routes/orderRoutes.js')
const app = express();
dbConnect();

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use("/api/products", productRoutes);
app.use('/api/payment', paymentRoutes )
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 4321

app.get('/', (req, res) =>{
    res.send(`Hello, This is app for B2B ecommerce website`)
})

app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`)
})





