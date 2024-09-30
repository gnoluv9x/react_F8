export const SET_TODO_INPUT = 'set_todo_input';
export const ADD_TODO = 'add_todo';
export const DELETE_TODO = 'delete_todo';

export const setTodo = (payload) => {
    return {
        type : SET_TODO_INPUT,
        payload,
    }
}
export const addTodo = (payload) => {
    return {
        type : ADD_TODO,
        payload,
    }
}
export const deleteTodo = (payload) => {
    return {
        type : DELETE_TODO,
        payload,
    }
}
