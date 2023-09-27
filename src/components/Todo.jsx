import PropTypes from "prop-types";

export default function Todo({ todo, onChange }) {
  return (
    <li key={todo.id}>
      <label htmlFor={todo.id}>{todo.title}</label>
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.completed}
        className="ml-2 focus:ring-0"
        onChange={onChange}
      />
    </li>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};
