import { useStore } from "./store/hooks"
import { setTodoInput, addTodo, deleteTodo } from "./store/actions"

function App() {
    const [state, dispatch] = useStore()
    const { todos, todoInput } = state

    return (
        <h1>
            <input
                value={todoInput}
                placeholder="Enter todo"
                onChange={e => {
                    dispatch(setTodoInput(e.target.value))
                }}
                className="input-todo"
            />
            <button
                onClick={e => dispatch(addTodo(todoInput))}
            >
                Add
            </button>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">
                        {todo}
                        <button
                            onClick={() => dispatch(deleteTodo(index))}
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </h1>
    )
}

export default App