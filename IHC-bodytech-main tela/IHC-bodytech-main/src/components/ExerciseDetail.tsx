import React from "react";
import { Exercise } from "../models/Exercise-model";


interface ExerciseDetailProps {
  exercise: Exercise | null;
  isOpen: boolean;
  onClose: () => void;
}

const ExerciseDetail: React.FC<ExerciseDetailProps> = ({
  exercise,
  isOpen,
  onClose,
}) => {
  if (!exercise) return null;

  return (
    <div className={`exercise-detail ${isOpen ? "active" : ""}`}>
      <div className="detail-header">
        <h3>{exercise.name}</h3>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>

      <div className="exercise-video">
        <span>Vídeo do Exercício</span>
      </div>

      <div>
        <h4>Descrição</h4>
        <p>{exercise.description}</p>
      </div>

      <div className="exercise-steps">
        <h4>Como fazer</h4>

        {exercise.steps.map((step, index: number) => (
          <div key={index} className="exercise-step">
            <div className="step-number">{index + 1}</div>
            <div>{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseDetail;
