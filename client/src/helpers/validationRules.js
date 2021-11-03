export const validationRules = {
  login: {
    presence: {
      message: '^validation.login'
    },
  },
	password: {
		presence: {
			message: '^validation.password'
		}
	},
	email: {
		email: {
      message: '^validation.email'
    },
		presence: {
			message: '^validation.email'
		}
	}
}