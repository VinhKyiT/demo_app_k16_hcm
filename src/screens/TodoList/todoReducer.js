import {HANDLE_ITEM_CHECKBOX_PRESS, REINIT_TODO_STATE, SET_TODO_LIST} from './todoActions';

// Giá trị khởi tạo
const initialTodoState = {
  todoList: [],
  taskDoneList: [],
};

// Hàm reducer
const todoReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_TODO_LIST:
      return {
        ...state,
        todoList: [...state.todoList, payload],
      };
    case HANDLE_ITEM_CHECKBOX_PRESS:
      const newTodo = state.todoList.find(item => item.id === payload);
      console.log('newTodo', newTodo);
      return {
        ...state,
        taskDoneList: [...state.taskDoneList, {...newTodo, status: 'done'}],
        todoList: [...state.todoList].filter(item => item.id !== payload),
      };
    case REINIT_TODO_STATE:
      return {
        ...payload,
      };
    default:
      return state;
  }
};

export {todoReducer, initialTodoState};
