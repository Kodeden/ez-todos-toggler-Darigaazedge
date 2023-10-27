import useIsOpen from "../hooks/useIsOpen";
import useManageTodos from "../hooks/useManageTodos";
import CheckmarkImage from "./Checkmark.png";
import TodoCounter from "./TodoCounter";

export default function Todolist() {
  const { todos, completedTodos, loading, handleButtonClick } =
    useManageTodos();

  const { isOpen, togglePopOut } = useIsOpen();

  return (
    <>
      <TodoCounter count={completedTodos.length} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        // TODO{jeremy} - refactor this into more components. It's kind of a mess.
        <div className="bg-black">
          <button
            className="mb-2  rounded bg-indigo-500 px-4 py-2 font-bold text-white  hover:bg-blue-700"
            onClick={togglePopOut}
          >
            {isOpen ? "-" : "+"}
          </button>
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

          <section id="popOutList">
            <div
              className={`transition-width fixed right-0 top-0 h-full w-0 overflow-y-auto border-l bg-black duration-300 ease-out ${
                isOpen ? "w-64" : "w-0"
              }`}
            >
              {isOpen && (
                <>
                  <h1 className="text-lg font-bold text-indigo-500">
                    Completed Todos:
                  </h1>
                  <ul>
                    {completedTodos.map((todo) => (
                      <li
                        key={todo.id}
                        className="mb-2 flex items-center text-indigo-500"
                      >
                        <span>{todo.title}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
