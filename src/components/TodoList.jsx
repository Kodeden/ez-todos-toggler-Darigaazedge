import useGatherTodos from "../hooks/gatherTodos";

export default function Todolist() {
  const { todos, loading } = useGatherTodos();

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
