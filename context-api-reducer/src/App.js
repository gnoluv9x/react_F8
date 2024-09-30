import "./App.css";
import { useContext, useRef } from "react";
import { StoreContext } from "./store";
import { setTodo, addTodo, deleteTodo } from "./store";

function App() {
  const [state, dispatch] = useContext(StoreContext);

  const { todo, todoList } = state;
  const inputEl = useRef(null);

  return (
    <div>
      <label>Todos : </label>
      <input
        ref={inputEl}
        value={todo}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(setTodo(e.target.value));
        }}
      />

      <button
        onClick={() => {
          dispatch(addTodo(todo));
          dispatch(setTodo(""));
          inputEl.current.focus();
        }}
      >
        ADD
      </button>

      <ul>
        {todoList.map((todo, idx) => (
          <li key={idx}>
            {todo}
            <span
              onClick={() => {
                dispatch(deleteTodo(idx));
              }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
