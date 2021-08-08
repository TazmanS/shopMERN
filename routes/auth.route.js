const {Router} = require('express')
const Auth = require('../models/auth.model')
const {body, validationResult} = require('express-validator');
const validationRules = require('../middleware/validation');

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
		const newUser = new Auth({
			login,
			password,
			phone,
			email
		})

		const userExisted = await Auth.find({
			login, email
		})

		if (userExisted.length === 0) {
			await newUser.save();
			return res.status(200).json({
				message: 'You created new user.'
			})
		} else {
			return res.status(404).json({
				message: 'User already existed'
			})
		}
	} catch (e) {
		return res.status(404).json({
			message: 'Something get wrong!'
		})
	}
})


module.exports = router
