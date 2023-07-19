import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    plan: null
}
const planSlice = createSlice({
    name: 'planSlice',
    initialState,
    reducers: {
        addPlan: (state, {payload}) => {
            state.plan = payload.plan
        }
    }
})

export const {addPlan} = planSlice.actions
export default planSlice.reducer