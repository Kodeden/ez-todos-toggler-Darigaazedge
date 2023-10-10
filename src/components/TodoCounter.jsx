import PropTypes from "prop-types";

export default function TodoCounter({ count }) {
  return (
    <div
      id="counter"
      className="flex justify-center bg-black text-2xl text-indigo-500"
    >
      Todos completed: {count}
    </div>
  );
}

TodoCounter.propTypes = {
  count: PropTypes.number.isRequired,
};
