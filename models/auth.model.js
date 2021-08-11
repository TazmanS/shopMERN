const {Schema, model} = require('mongoose')

const schema = new Schema({
	login: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
  token: {
    type: String
  }
})

module.exports = model('auth', schema)