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
// app.use(cors())
const PORT = process.env.PORT || 4321

const allowedOrigins = [
    "http://localhost:5173", "http://localhost:5174", // Local development
    "https://ecom-full-stack-occ.netlify.app", // Deployed frontend
  ];
  
  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
      credentials: true, // Allow cookies or Authorization headers
    })
  );
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use("/api/products", productRoutes);
app.use('/api/payment', paymentRoutes )
app.use("/api/orders", orderRoutes);



app.get('/', (req, res) =>{
    res.send(`Hello, This is app for B2B ecommerce website`)
})

app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`)
})





