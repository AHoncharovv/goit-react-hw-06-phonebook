import { createReducer } from '@reduxjs/toolkit';
import { add, remove, filter } from "./actions";

export const filterReducer = createReducer('', {
    [filter]: (state, action) => state = action.payload,
});

export const usersReducer = createReducer([], {
    [add]: (state, action) => [...state, action.payload],
    [remove]: (state, action) => state.filter(user => user.id !== action.payload),
});

