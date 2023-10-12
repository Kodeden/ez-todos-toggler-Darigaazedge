import useIsOpen from "../hooks/useIsOpen";
import useManageTodos from "../hooks/useManageTodos";

export default function PopOutList() {
  const { completedTodos } = useManageTodos();
  const { isOpen, togglePopOut } = useIsOpen();

  // THOUGHT!!! Switch from checkbox to small button (complete or something) and then move to completedTodo list. The TodoCounter will measure the length of the CompletedTodo list as use that as a number.

  return (
    <>
      <section className="flex justify-end bg-black">
        <button
          className={`mb-2 transform rounded bg-indigo-500 px-4 py-2 font-bold text-white transition duration-300 ease-out hover:bg-blue-700 ${
            isOpen ? "-translate-x-74" : "translate-x-0"
          }`}
          onClick={togglePopOut}
        >
          {isOpen ? "-" : "+"}
        </button>
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
                {completedTodos.map((todo, id) => (
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
    </>
  );
}
