// we have made seperate directory to avoid the confilt.

import { createAction, createReducer } from '@reduxjs/toolkit'

const incrementByAmount = createAction('counter/incrementByAmount')
// const decrement = createAction('counter/decrement')

const initialState= { value : 0} ; //object

// const rootReducer = createReducer(0, (builder) => {
const rootReducer = createReducer( initialState, (builder) => {

    //   builder.addCase(incrementByAmount, (state, action) => state + action.payload) //payload value we need to set by ourselves.


    builder.addCase(incrementByAmount, (state, action) => { 
        state.value += action.payload 
    }) //payload value we need to set by ourselves.


    //   builder.addCase(decrement, (state, action) => state - action.payload)

})

export {incrementByAmount} ; //actions are also exported in reducer. //action imported in file where we want to reflect the updated global value. like in contact page

export default rootReducer; //imported in store,js