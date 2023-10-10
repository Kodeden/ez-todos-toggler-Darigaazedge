import { useRef, useState } from "react";
import useGatherTodos from "../hooks/useGatherTodos";
import TodoCounter from "./TodoCounter";

export default function Todolist() {
  const { todos, loading } = useGatherTodos();
  const [checkedTodos, setCheckedTodos] = useState(0);

  const checkboxRefs = useRef({});

  const handleCheckboxChange = (id) => {
    checkboxRefs.current[id] = checkboxRefs.current[id] || {}; // initializes the checkbox reference for the given ID if it doesnt exist creating storage space

    checkboxRefs.current[id].checked = !checkboxRefs.current[id].checked; // Toggles the checked property for a given ID.

    const checkedCheckboxes = Object.values(checkboxRefs.current).filter(
      (checkbox) => checkbox.checked
    ).length;
    setCheckedTodos(checkedCheckboxes);
    // In a nutshell, takes the checkboxRefs.current and turns it into an array then filters out only the checked checkbox IDs, then gives me that number then sets checkedTodos to that number.
  };

  return (
    <>
      <TodoCounter count={checkedTodos} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section className="flex flex-row justify-center bg-black">
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="mb-2 flex items-center text-indigo-500"
              >
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
