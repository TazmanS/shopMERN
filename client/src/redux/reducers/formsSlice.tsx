import { createSlice } from "@reduxjs/toolkit";

interface FormsState {
	registerForm: boolean
}

const initialState : FormsState = {
	registerForm: true
}

export const formsSlice = createSlice({
	name: 'forms',
	initialState,
	reducers: {
		openRegisterForm: (state) => {
			state.registerForm = true
		},
		closeRegisterForm: (state) => {
			state.registerForm = false
		}
	}
})

export const { openRegisterForm, closeRegisterForm } = formsSlice.actions

export default formsSlice.reducer