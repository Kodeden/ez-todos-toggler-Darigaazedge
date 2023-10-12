import useManageTodos from "../hooks/useManageTodos";

export default function TodoCounter() {
  const { completedTodos } = useManageTodos();

  return (
    <div
      id="counter"
      className="flex justify-center bg-black text-2xl text-indigo-500"
    >
      Todos completed: {completedTodos.length}
    </div>
  );
}
