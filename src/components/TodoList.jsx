import { useRef, useState } from "react";
import useGatherTodos from "../hooks/useGatherTodos";
import TodoCounter from "./TodoCounter";

export default function Todolist() {
  const { todos, loading } = useGatherTodos();
  const [checkedTodos, setCheckedTodos] = useState(0);

  const checkboxRefs = useRef({});

  const handleCheckboxChange = (id) => {
    checkboxRefs.current[id] = checkboxRefs.current[id] || {};

    checkboxRefs.current[id].checked = !checkboxRefs.current[id].checked;

    const checkedCheckboxes = Object.values(checkboxRefs.current).filter(
      (checkbox) => checkbox.checked
    ).length;
    setCheckedTodos(checkedCheckboxes);
  };

  return (
    <>
      <TodoCounter count={checkedTodos} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section className="flex flex-row justify-center">
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} className="mb-2 flex items-center">
                <span>{todo.title}</span>
                <input
                  type="checkbox"
                  className="ml-2"
                  onChange={() => handleCheckboxChange(todo.id)}
                ></input>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
