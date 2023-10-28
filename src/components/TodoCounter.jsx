import PropTypes from "prop-types";
import useManageTodos from "../hooks/useManageTodos";

export default function TodoCounter({ count }) {
  const { initialTodosCount } = useManageTodos();
  return (
    <div
      id="counter"
      className="flex justify-center bg-black text-2xl text-indigo-500"
    >
      <h1>
        Todos completed: {count} / {initialTodosCount}{" "}
      </h1>
    </div>
  );
}

TodoCounter.propTypes = {
  count: PropTypes.number.isRequired,
};
