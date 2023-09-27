import Todo from "./components/Todo";
import useFetch from "./hooks/useFetch";

function App() {
  const [todos, setTodos] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const handleChange = (event) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id.toString() === event.target.id) {
          return { ...todo, completed: event.target.checked };
        }
        return todo;
      });
    });
  };

  const numOfCompletedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <main>
      <h1 className="mt-4 text-center text-3xl">
        {numOfCompletedTodos} / {todos.length} Completed
      </h1>
      <ul className="container mx-auto flex flex-col items-center gap-y-2 pt-8">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onChange={handleChange} />
        ))}
      </ul>
    </main>
  );
}

export default App;
