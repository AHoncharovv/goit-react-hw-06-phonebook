import { createAction } from '@reduxjs/toolkit';

export const add = createAction('users/add');
export const remove = createAction('users/remove');

export const filter = createAction('users/filter');