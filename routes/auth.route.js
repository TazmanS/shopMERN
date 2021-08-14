const {Router} = require('express')
const Auth = require('../models/auth.model')
const {body, validationResult} = require('express-validator');
const validationRules = require('../middleware/validation');
const {generateAccessToken, getBcryptData, compareBcryptData} = require('../helpers/auth')

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
			email
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
			message: 'Something went wrong!'
		})
	}
})

router.post('/login', 
	validationRules([
		body('login').isString(),
		body('password').isString().isLength({min: 6})
	]), async (req, res) => {
		const {login, password} = req.body;

		try {
			const existedUser = await Auth.find({login})
			if (existedUser.length > 0) {
				const comparePassword = await compareBcryptData(password, existedUser[0].password)
				if (comparePassword) {
					const token = await generateAccessToken({
						login: existedUser[0].login,
						email: existedUser[0].email
					})
					return res.status(200).json({
						token,
						data: {
							login: existedUser[0].login,
							email: existedUser[0].email,
							phone: existedUser[0].phone,
						}
					})
				}
			} else {
				return res.status(300).json({message: 'User is not found'})
			}

		} catch (e) {
			console.log(e)
			return res.status(404).json({message: 'Something went wrong'})
		}
})


module.exports = router
