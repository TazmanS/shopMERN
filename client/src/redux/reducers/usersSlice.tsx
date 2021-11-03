import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UsersState {

}

const initialState : UsersState = {

}

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setSearch: (state, action : PayloadAction<string>) => {
			
		}
	}
})

export const { setSearch } = usersSlice.actions;

export default usersSlice.reducer