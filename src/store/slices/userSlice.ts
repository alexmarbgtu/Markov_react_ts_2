import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  "id": '',
  "firstName": "",
  "lastName": "",
  "maidenName": "",
  "age": 0,
  "gender": "",
  "email": "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.firstName = action.payload
    },
    setUser: (state, action) => {
      // console.log(action.payload);
      
      state = Object.assign({}, state, action.payload)
      return state
    }
  }
})

export const { changeName, setUser } =userSlice.actions

export default userSlice.reducer