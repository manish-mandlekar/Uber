const express = require('express')
const router = express.Router();
const {body} = require('express-validator')
const userControler = require('../controllers/user.controler')
const middleware = require('../middlewares/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First Name must be at least 3 characters long'),
    body('password').isLength({min:5}).withMessage('Password must be at least 5 characters long')
],
userControler.registerUser
)
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 5}).withMessage('Password must be at least 5 Characters long')
],
userControler.loginUser
)
router.get('/profile',middleware.authUser , userControler.getUserProfile)
router.get('/logout',middleware.authUser , userControler.logoutUser)
module.exports = router;