import { useRef, useState } from "react";

export default function useCheckboxLogic(initialTodos) {
  const [checkedTodos, setCheckedTodos] = useState(0);
  const checkboxRefs = useRef({});

  const handleCheckboxChange = (id) => {
    checkboxRefs.current[id] = checkboxRefs.current[id] || {};
    checkboxRefs.current[id].checked = !checkboxRefs.current[id].checked;

    const checkedCheckboxes = Object.values(checkboxRefs.current).filter(
      (checkbox) => checkbox.checked
    ).length;
    setCheckedTodos(checkedCheckboxes);
  };

  return {
    checkedTodos,
    checkboxRefs,
    handleCheckboxChange,
  };
}
