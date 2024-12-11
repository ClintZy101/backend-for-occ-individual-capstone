const express = require('express')
const verifyToken = require('../middlewares/authMiddleware.js')
const authorizeRole = require('../middlewares/authorizeRole.js')
const router = express.Router();

router.get('/admin', verifyToken, authorizeRole('admin'), (req, res)=>{
    res.json(`Welcome admin!`)
})
router.get('/manager',verifyToken, authorizeRole('admin', 'manager'),(req, res)=>{
    res.json(`Welcome manager!`)
})
router.get('/user',verifyToken, authorizeRole('admin','manager','user'),(req, res)=>{
    res.json(`Welcome user!`)
})

module.exports = router
