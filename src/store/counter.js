import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice ({
    name: 'counter',
    initialState: {counter: 0},
    reducers: {
        increment(state, action) {
            state.counter ++;
        },
        decrement(state, action) {
            state.counter --;
        }
    }
});

export const counterActions = counter.actions;

export default counter;