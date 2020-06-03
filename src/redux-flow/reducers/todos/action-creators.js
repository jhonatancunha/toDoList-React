import { v4 } from 'uuid';
import { ADD_TODO } from './actions';

export const addToDo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: v4(),
    text,
  },
});