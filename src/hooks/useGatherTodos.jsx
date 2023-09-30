import { useEffect, useState } from "react";

export default function useGatherTodos() {
  const [todos, setTodos] = useState([]);
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

  return { todos, loading };
}
