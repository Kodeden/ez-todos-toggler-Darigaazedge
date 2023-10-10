import { useState } from "react";
import useGatherTodos from "../hooks/useGatherTodos";

export default function PopOutList() {
  const { todos } = useGatherTodos();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopOut = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="bg-black">
        <button
          className="mb-2 rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={togglePopOut}
        >
          {isOpen ? "Close Completed Todos" : "Open Completed Todos"}
        </button>
        <div
          className={`transition-width fixed right-0 top-0 h-full w-0 overflow-y-auto border-l bg-black duration-300 ease-out ${
            isOpen ? "w-64" : "w-0"
          }`}
        >
          {isOpen && (
            <>
              <h1 className="text-lg font-bold text-indigo-500">
                Complated Todos:
              </h1>
              <ul>
                {todos.map((todo) => (
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
