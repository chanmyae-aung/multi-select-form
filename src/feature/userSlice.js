import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        createUser: (state, {payload}) => {
            state.user = payload.user
        }
    }
})

export const {createUser} = userSlice.actions
export default userSlice.reducer