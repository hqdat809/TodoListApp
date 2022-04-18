import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO } from "./constant"
const stateStore = JSON.parse(localStorage.getItem('todo-item'))


const initState = {
    todoInput: '',
    todos: stateStore
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            const localStoreState = [...state.todos, action.payload]
            localStorage.setItem('todo-item', JSON.stringify(localStoreState))

            return {
                todoInput: '',
                todos: localStoreState,
            }
        case DELETE_TODO:
            const newState = [...state.todos]
            newState.splice(action.payload, 1)
            localStorage.setItem('todo-item', JSON.stringify(newState))

            return {
                todoInput: '',
                todos: newState
            }
        default:
            throw new Error('invalid ')
    }
}

export { initState }
export default reducer