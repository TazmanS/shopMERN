import React, { useState } from 'react'
import { Modal, Paper } from '@material-ui/core'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { closeRegisterForm } from '../../redux/reducers/formsSlice'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { BaseButton, BaseInput } from '../../components';
import { injectIntl } from 'react-intl';
import { validateField } from '../../helpers/validation'
import { validationRules } from '../../helpers/validationRules'


interface RegisterFormProps {
	intl: any
}

const RegisterForm: React.FC<RegisterFormProps> = (props) => {
	const dispatch = useAppDispatch()
	const classes = useStyles()
	const {intl} = props;

	const { registerForm } = useAppSelector(state => state.forms)
	const [registerData, setRegisterData] = useState({
		login: '',
		email: '',
		password: '',
		rePassword: ''
	})
	const [registerError, setRegisterError] = useState({
		login: '',
		email: '',
		password: '',
		rePassword: ''
	})

	const registration = async () => {
		const _login = validateField(validationRules, 'login', registerData.login)
		const _email = validateField(validationRules, 'email', registerData.email)
		const _password = validateField(validationRules, 'password', registerData.password)
		const _rePassword = registerData.password !== registerData.rePassword ? 'validation.rePassword' : ''

		if (!_login && !_email && !_password && !_rePassword) {

		} else {
			setRegisterError({
				...registerError, 
				login: _login,
				email: _email,
				password: _password,
				rePassword: _rePassword
			})
		}
	}

	const getContent = () => {
		return (
			<Paper elevation={3} className={classes.container}>
				<div className={classes.content}>
					<div className={classes.title}>
						{intl.formatMessage({id: 'auth.registerNewAcc'})}
					</div>
					<div className={classes.contetnItem}>
						<BaseInput 
							value={registerData.login}
							setValue={(e) => setRegisterData({
								...registerData, login: e.target.value
							})}
							placeholder={intl.formatMessage({id: 'auth.login'})}
							errorMessage={registerError.login}
							clearError={() => setRegisterError({
								...registerError, login: ''
							})}
						/>
					</div>
					<div className={classes.contetnItem}>
						<BaseInput 
							value={registerData.email}
							setValue={(e) => setRegisterData({
								...registerData, email: e.target.value
							})}
							placeholder={intl.formatMessage({id: 'auth.email'})}
							errorMessage={registerError.email}
							clearError={() => setRegisterError({
								...registerError, email: ''
							})}
						/>
					</div>
					<div className={classes.contetnItem}>
						<BaseInput 
							value={registerData.password}
							setValue={(e) => setRegisterData({
								...registerData, password: e.target.value
							})}
							placeholder={intl.formatMessage({id: 'auth.password'})}
							errorMessage={registerError.password}
							clearError={() => setRegisterError({
								...registerError, password: ''
							})}
						/>
					</div>
					<div className={classes.contetnItem}>
						<BaseInput 
							value={registerData.rePassword}
							setValue={(e) => setRegisterData({
								...registerData, rePassword: e.target.value
							})}
							placeholder={intl.formatMessage({id: 'auth.repeatPassword'})}
							errorMessage={registerError.rePassword}
							clearError={() => setRegisterError({
								...registerError, rePassword: ''
							})}
						/>
					</div>
					<div className={classes.contetnItem}>
						<BaseButton onClick={registration}>
							{intl.formatMessage({id: 'auth.registration'})}
						</BaseButton>
					</div>
				</div>
			</Paper>
		)
	}

	return (
		<Modal
			open={registerForm}
			onClose={() => dispatch( closeRegisterForm() )}
		>
				{getContent()}
		</Modal>
	)
}

const useStyles = makeStyles((theme: Theme) => 
	createStyles({
		container: {
			position: 'absolute',
			top: '10%',
			bottom: 0,
			left: 0,
			right: 0,
			maxWidth: 350,
			maxHeight: 500,
			margin: '0 auto',
		},
		content: {
			width: '100%',
			height: '100%',
			display: "flex",
			flexDirection: 'column',
			alignItems: 'center',
			marginTop: 25
		},
		contetnItem: {
			margin: '15px 0',
			width: '80%'
		},
		title: {
			fontWeight: 'bold',
			fontSize: 18,
			marginBottom: 20
		}
	})
)

export default injectIntl(RegisterForm)