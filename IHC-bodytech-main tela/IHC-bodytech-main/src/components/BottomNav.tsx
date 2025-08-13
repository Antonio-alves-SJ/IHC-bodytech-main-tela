import React from "react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "home", icon: "🏠", label: "Início" },
    { id: "stats", icon: "📊", label: "Estatísticas" },
    { id: "plans", icon: "📝", label: "Planos" },
    { id: "settings", icon: "⚙️", label: "Ajustes" },
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`nav-item ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => onTabChange(tab.id)}
        >
          <div className="nav-icon">{tab.icon}</div>
          <span>{tab.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNav;
