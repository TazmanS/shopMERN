const {Router} = require('express')
const Auth = require('../models/auth.model')
const {body} = require('express-validator');
const validationRules = require('../middleware/validation');
const {generateAccessToken, getBcryptData} = require('../helpers/auth')

const router = Router();

router.post('/register', 
	validationRules	([  
		body('login').isString().isLength({min: 1}),
		body('password').isLength({min: 6}),
		body('phone').isNumeric(),
		body('email').isEmail()
	])
	,async (req, res) => {
	try {
		const {login, password, phone, email} = req.body;
		const token = generateAccessToken({login, email})
    const bycript_password = await getBcryptData(password)

		const newUser = new Auth({
			login,
			password: bycript_password,
			phone,
			email,
      token
		})

		const isUserExisted = await Auth.find({
			email
		})

		if (isUserExisted.length === 0) {
			await newUser.save();
			return res.status(200).json({
				message: 'You created new user.',
        token
			})
		} else {
			return res.status(404).json({
				message: 'User already existed'
			})
		}
	} catch (e) {
    console.log(e)
		return res.status(404).json({
			message: 'Something get wrong!'
		})
	}
})


module.exports = router
