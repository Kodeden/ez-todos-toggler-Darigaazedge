import { useEffect, useState } from "react";

export default function useManageTodos() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleButtonClick = (id) => {
    const todoComplete = todos[id];
    const updatedTodoList = todos.filter((_, i) => i !== id);
    setTodos(updatedTodoList);
    setCompletedTodos([...completedTodos, todoComplete]);
    console.log(completedTodos);
    console.log(completedTodos.length);
  };

  const completedCounter = completedTodos.length;

  return {
    todos,
    completedTodos,
    loading,
    completedCounter,
    handleButtonClick,
  };
}
