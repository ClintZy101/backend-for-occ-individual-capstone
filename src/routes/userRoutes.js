const express = require('express')
const verifyToken = require('../middlewares/authMiddleware.js')
const authorizeRole = require('../middlewares/authorizeRole.js');
const { getAllUsers, editUser, deleteUser } = require('../controllers/usersController.js');
const router = express.Router();

router.get('/admin', verifyToken, authorizeRole('admin'), (req, res)=>{
    res.json(`Welcome admin!`)
})
router.get('/seller',verifyToken, authorizeRole('admin', 'seller'),(req, res)=>{
    res.json(`Welcome seller!`)
})
router.get('/buyer',verifyToken, authorizeRole('admin','seller','buyer'),(req, res)=>{
    res.json(`Welcome buyer!`)
})

router.get('/all',verifyToken, authorizeRole('admin'), getAllUsers)
router.put('/edit/:id', verifyToken, authorizeRole('admin'), editUser)
router.delete('/delete/:id', verifyToken, authorizeRole('admin'), deleteUser)

module.exports = router
