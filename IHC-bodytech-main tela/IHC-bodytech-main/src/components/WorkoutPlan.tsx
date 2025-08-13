import React from "react";
import { WorkoutPlan as WorkoutPlanModel } from "../models/WorkoutPlan-model";

interface WorkoutPlanProps {
  plan: WorkoutPlanModel;
}

const WorkoutPlan: React.FC<WorkoutPlanProps> = ({ plan }) => {
  return (
    <div className="workout-plan">
      <h4>{plan.name}</h4>
      <div className="plan-details">
        <div className="plan-detail">
          <div>⏱️</div>
          <span>{plan.duration} min</span>
        </div>
        <div className="plan-detail">
          <div>🔥</div>
          <span>{plan.calories} cal</span>
        </div>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${plan.progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default WorkoutPlan;
