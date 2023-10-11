import useManageTodos from "../hooks/useManageTodos";
import CheckmarkImage from "./Checkmark.png";
import TodoCounter from "./TodoCounter";

export default function Todolist() {
  const { todos, loading, handleButtonClick } = useManageTodos();

  return (
    <>
      <TodoCounter />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section className="flex flex-row justify-center bg-black">
          <ul>
            {todos.map((todo, id) => (
              <li
                key={todo.id}
                className="mb-2 flex items-center text-indigo-500"
              >
                <button onClick={() => handleButtonClick(id)}>
                  <img
                    src={CheckmarkImage}
                    alt="checkmark icon"
                    className="mr-2 h-6 w-6"
                  />
                </button>
                <span>{todo.title}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
