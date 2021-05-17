import express from 'express'
import { addOrderItems } from '../controllers/orderController.js'
const router = express.Router()
import { protect } from '../middlewares/authMiddleware.js' 


router.route('/').post(registerUser)


export default router