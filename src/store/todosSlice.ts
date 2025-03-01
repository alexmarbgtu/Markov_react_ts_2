import { createSlice } from '@reduxjs/toolkit'

export interface ITodo {
	id: number
	todo: string
	completed: boolean
	userId: number
}

const initialState: ITodo[] = 
	[{
    id: 0,
    todo: '',
    completed: false,
    userId: 0
  }]

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		markComplete: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.forEach(todo => {
				if (todo.id === action.payload) {
					todo.completed = !todo.completed
				}
			})
		},
	},
})

// Action creators are generated for each case reducer function
export const { markComplete } = todosSlice.actions

export default todosSlice.reducer
