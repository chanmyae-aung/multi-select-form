import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    plan: null,
    addOns: [],
    finishPlan:[]
}
const planSlice = createSlice({
    name: 'planSlice',
    initialState,
    reducers: {
        addPlan: (state, {payload}) => {
            state.plan = payload.plan
        },
        addAddOns: (state, {payload}) => {
            state.addOns = payload.addOns
        },
        // getFinish: (state) => {
        //     state.getFinish
        // }
    }
})

export const {addPlan, addAddOns} = planSlice.actions
export default planSlice.reducer