import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsComponent from "./components/Stats";
import WorkoutPlanComponent from "./components/WorkoutPlan";
import ExerciseList from "./components/ExerciseList";
import ExerciseDetail from "./components/ExerciseDetail";
import BottomNav from "./components/BottomNav";
import FloatingButton from "./components/FloatingButton";
import "./App.css";
import "./acessibility.css";

import { Exercise } from "./models/Exercise-model";
import { Stats } from "./models/Stats-model";
import { WorkoutPlan } from "./models/WorkoutPlan-model";
import AccessibilityButton from "./components/AcessibilityButton";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    document.title = "BODYTECH - Where Strength Meets Innovation";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Aplicativo para acompanhamento de treinos e exercícios físicos com recursos de acessibilidade integrados."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Aplicativo para acompanhamento de treinos e exercícios físicos com recursos de acessibilidade integrados.";
      document.head.appendChild(meta);
    }

    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.setAttribute("role", "main");
      mainElement.setAttribute(
        "aria-label",
        "Conteúdo principal do aplicativo fitness"
      );
    }
  }, []);

  const weeklyStats: Stats = {
    workouts: 4,
    minutes: 320,
    calories: 2580,
  };

  const workoutPlans: WorkoutPlan[] = [
    {
      id: "plan1",
      name: "Treino A - Peito e Tríceps",
      duration: 45,
      calories: 420,
      progress: 75,
    },
    {
      id: "plan2",
      name: "Treino B - Costas e Bíceps",
      duration: 50,
      calories: 480,
      progress: 40,
    },
  ];

  const exercises: Exercise[] = [
    {
      id: "ex1",
      name: "Supino Reto",
      icon: "💪",
      category: "Peito",
      series: 4,
      repetitions: 12,
      description:
        "O supino reto é um exercício composto que trabalha principalmente os músculos do peito (peitoral maior), junto com os ombros (deltóide anterior) e os tríceps.",
      steps: [
        "Deite-se em um banco plano com os pés no chão. Seus olhos devem estar alinhados com a barra.",
        "Segure a barra com as mãos um pouco mais abertas que a largura dos ombros, com as palmas voltadas para os pés.",
        "Levante a barra do suporte, mantendo os braços estendidos.",
        "Baixe lentamente a barra até que ela toque levemente o meio do peito.",
        "Empurre a barra de volta à posição inicial, contraindo o peito.",
      ],
    },
    {
      id: "ex2",
      name: "Agachamento",
      icon: "💪",
      category: "Pernas",
      series: 4,
      repetitions: 15,
      description:
        "O agachamento é um exercício composto que trabalha principalmente os músculos das pernas, incluindo os quadríceps, isquiotibiais e glúteos.",
      steps: [
        "Fique em pé com os pés na largura dos ombros.",
        "Mantenha o peito erguido e as costas retas.",
        "Dobre os joelhos e abaixe o corpo como se fosse sentar em uma cadeira.",
        "Desça até que suas coxas estejam paralelas ao chão.",
        "Empurre através dos calcanhares para voltar à posição inicial.",
      ],
    },
    {
      id: "ex3",
      name: "Puxada Frontal",
      icon: "💪",
      category: "Costas",
      series: 3,
      repetitions: 12,
      description:
        "A puxada frontal é um exercício que trabalha principalmente os músculos das costas, especialmente o latíssimo do dorso (lats).",
      steps: [
        "Sente-se na máquina com os joelhos fixados sob os apoios.",
        "Segure a barra com as mãos um pouco mais abertas que a largura dos ombros.",
        "Puxe a barra para baixo até que toque levemente a parte superior do peito.",
        "Controle o movimento ao retornar a barra à posição inicial.",
        "Mantenha os cotovelos apontando para baixo durante todo o movimento.",
      ],
    },
    {
      id: "ex4",
      name: "Rosca Direta",
      icon: "💪",
      category: "Braços",
      series: 3,
      repetitions: 15,
      description:
        "A rosca direta é um exercício de isolamento que trabalha principalmente o músculo bíceps braquial.",
      steps: [
        "Fique em pé com os pés na largura dos ombros.",
        "Segure a barra com as mãos na largura dos ombros, palmas voltadas para cima.",
        "Mantenha os cotovelos próximos ao corpo.",
        "Dobre os cotovelos para levantar a barra até a altura dos ombros.",
        "Baixe lentamente até que os braços estejam quase estendidos.",
      ],
    },
    {
      id: "ex5",
      name: "Tríceps Corda",
      icon: "💪",
      category: "Braços",
      series: 3,
      repetitions: 15,
      description:
        "O tríceps corda é um exercício de isolamento que trabalha os três feixes do músculo tríceps braquial.",
      steps: [
        "Fique em pé em frente à máquina com cabos.",
        "Segure as extremidades da corda com as mãos.",
        "Mantenha os cotovelos próximos ao corpo.",
        "Estenda os braços para baixo, afastando as extremidades da corda.",
        "Retorne lentamente à posição inicial.",
      ],
    },
  ];

  const handleExerciseClick = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  const handleAddWorkout = () => {
    console.log("Adicionar novo treino");
  };

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <Hero />
        <StatsComponent stats={weeklyStats} />

        <h3 className="section-title">Seu Plano de Treino</h3>
        <div className="workout-plan-list-container">
          {workoutPlans.map((plan) => (
            <WorkoutPlanComponent key={plan.id} plan={plan} />
          ))}
        </div>

        <ExerciseList
          exercises={exercises}
          onExerciseClick={handleExerciseClick}
        />
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      <FloatingButton onClick={handleAddWorkout} />

      <AccessibilityButton />

      <ExerciseDetail
        exercise={selectedExercise}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </div>
  );
};

export default App;
