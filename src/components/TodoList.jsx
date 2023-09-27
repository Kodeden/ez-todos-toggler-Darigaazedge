import gatherTodos from "../hooks/gatherTodos";

export default function Todolist() {

    const {todos, loading} = gatherTodos();

    return(
        <>
            {loading ? ( <p>Loading...</p>
            ) : (
            <div>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            </div>
            )}
        </>
    )

}