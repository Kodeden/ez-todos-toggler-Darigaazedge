import PropTypes from "prop-types";

export default function TodoCounter({ count }) {
  return (
    <div id="counter" className="flex justify-center text-2xl">
      Todos completed: {count}
    </div>
  );
}

TodoCounter.propTypes = {
  count: PropTypes.number.isRequired,
};
