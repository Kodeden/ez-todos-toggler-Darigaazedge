import { useState } from "react";
import useGatherTodos from "../hooks/useGatherTodos";
import TodoCounter from "./TodoCounter";

export default function Todolist() {
  const { todos, loading } = useGatherTodos();
  const [checkedTodos, setCheckedTodos] = useState(0);

  const handleCheckboxChange = () => {
    const checkedCheckboxes = document.querySelectorAll(
      "input[type=checkbox]:checked"
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
                  onChange={handleCheckboxChange}
                ></input>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
