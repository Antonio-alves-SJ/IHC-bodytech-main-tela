import React from "react";
import { Stats as StatsModel } from "../models/Stats-model";

interface StatsProps {
  stats: StatsModel;
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <section className="stats">
      <div className="stats-title">
        <h3>Progresso Semanal</h3>
        <span>Ver todos</span>
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="value">{stats.workouts}</div>
          <div className="label">Treinos</div>
        </div>
        <div className="stat-card">
          <div className="value">{stats.minutes}</div>
          <div className="label">Minutos</div>
        </div>
        <div className="stat-card">
          <div className="value">{stats.calories}</div>
          <div className="label">Calorias</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
