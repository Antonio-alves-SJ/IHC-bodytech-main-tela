import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <div className="fab" onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
};

export default FloatingButton;
