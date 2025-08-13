import React, { useState } from "react";
import { Exercise } from "../models/Exercise-model";
import { ExerciseCategory } from "../models/ExerciseCategory-types";

interface ExerciseListProps {
  exercises: Exercise[];
  onExerciseClick: (exercise: Exercise) => void;
}

const ExerciseList: React.FC<ExerciseListProps> = ({
  exercises,
  onExerciseClick,
}) => {
  const [activeCategory, setActiveCategory] =
    useState<ExerciseCategory>("Todos");
  const categories: ExerciseCategory[] = [
    "Todos",
    "Peito",
    "Costas",
    "Pernas",
    "Braços",
    "Ombros",
    "Abdômen",
  ];

  const filteredExercises =
    activeCategory === "Todos"
      ? exercises
      : exercises.filter((ex) => ex.category === activeCategory);

  return (
    <div>
      <div className="exercises-tabs">
        {categories.map((category) => (
          <div
            key={category}
            className={`exercise-tab ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="exercise-list">
        <h3 className="section-title">Exercícios Populares</h3>

        <div className="exercise-list-container">
          {filteredExercises.map((exercise) => (
            <div
              key={exercise.id}
              className="exercise-card"
              onClick={() => onExerciseClick(exercise)}
            >
              <div className="exercise-icon">{exercise.icon}</div>
              <div className="exercise-info">
                <h4>{exercise.name}</h4>
                <p>
                  {exercise.series} séries • {exercise.repetitions} repetições •{" "}
                  {exercise.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;
