import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './slices/todosSlice'
import userReduser from './slices/userSlice'
import authReduser from './slices/authSlice'
import { userApi } from './api/userApi'

export const store = configureStore({
	reducer: {
		todos: todosReducer,
		user: userReduser,
    auth: authReduser,
		[userApi.reducerPath]: userApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(userApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
