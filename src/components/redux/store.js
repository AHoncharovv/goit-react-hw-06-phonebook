import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from '@reduxjs/toolkit';

export const filter = createAction('users/filter');
const filterReducer = createReducer('', {
    [filter]: (state, action) => state = action.payload,
});

export const add = createAction('users/add');
export const remove = createAction('users/remove');

const initialState = [
    { id: "_IPoi", name: "Rosie Simpson", number: "1111111111111" },
    { id: "gzcNn", name: "test", number: "1111111111111" },
    { id: "ZGr-J", name: "wdwdwd", number: "22222222222" },
    { id: "IL5T1", name: "Anton", number: "22222222222" },
];

const usersReducer = createReducer(initialState, {
    [add]: (state, action) => [...state, action.payload],
    [remove]: (state, action) => state.filter(user => user.id !== action.payload),
});

export const store = configureStore({
    reducer: {
        items: usersReducer,
        filter: filterReducer,
    },
});
