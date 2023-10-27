import PropTypes from "prop-types";

export default function TodoCounter({ count }) {
  return (
    <h1
      id="counter"
      className="flex justify-center bg-black text-2xl text-indigo-500"
    >
      Todos completed: {count}
    </h1>
  );
}

TodoCounter.propTypes = {
  count: PropTypes.number.isRequired,
};
