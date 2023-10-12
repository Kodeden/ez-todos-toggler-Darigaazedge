import { useState } from "react";

export default function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopOut = () => {
    setIsOpen(!isOpen);
  };

  return { togglePopOut, isOpen };
}
