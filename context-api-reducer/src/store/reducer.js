import { ADD_TODO, SET_TODO_INPUT , DELETE_TODO } from "./constant";

const initialState = {
    todo : '',
    todoList : JSON.parse( localStorage.getItem('todo') ) || [],
}

const reducer = (state , actions) => {

    let newState = {};

    switch (actions.type) {
        case SET_TODO_INPUT:
            newState = { ...state }
            newState.todo = actions.payload;
            return newState
        case ADD_TODO:
            newState = { ...state }
            newState.todoList = [...state.todoList , actions.payload];
            localStorage.setItem('todo' , JSON.stringify(newState.todoList))
            return newState
        case DELETE_TODO:
            newState = { ...state }
            const newTodoList = newState.todoList
            newTodoList.splice( actions.payload , 1);
            return newState
        default:
            throw new Error('Invalid action.')
    };

}

export { initialState , reducer }
