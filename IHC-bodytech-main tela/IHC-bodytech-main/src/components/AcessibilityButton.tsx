// components/AccessibilityButton.tsx
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reduceMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

const AccessibilityButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reduceMotion: false,
    screenReader: false,
    keyboardNavigation: false,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSetting = (setting: keyof AccessibilitySettings) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    });

    // Aplicar mudanças baseadas nas configurações
    applyAccessibilityChanges({
      ...settings,
      [setting]: !settings[setting],
    });
  };

  const applyAccessibilityChanges = (currentSettings: AccessibilitySettings) => {
    const rootElement = document.documentElement;
    
    // Alto contraste
    if (currentSettings.highContrast) {
      rootElement.classList.add("high-contrast");
    } else {
      rootElement.classList.remove("high-contrast");
    }
    
    // Texto grande
    if (currentSettings.largeText) {
      rootElement.classList.add("large-text");
    } else {
      rootElement.classList.remove("large-text");
    }
    
    // Reduzir movimento
    if (currentSettings.reduceMotion) {
      rootElement.classList.add("reduce-motion");
    } else {
      rootElement.classList.remove("reduce-motion");
    }
    
    // Navegação por teclado
    if (currentSettings.keyboardNavigation) {
      document.addEventListener("keydown", handleKeyboardNavigation);
    } else {
      document.removeEventListener("keydown", handleKeyboardNavigation);
    }
    
    // Leitor de tela - apenas um placeholder, precisaria de integração com tecnologias assistivas
    if (currentSettings.screenReader) {
      rootElement.setAttribute("aria-live", "polite");
    } else {
      rootElement.removeAttribute("aria-live");
    }
  };

  const handleKeyboardNavigation = (e: KeyboardEvent) => {
    // Implementação básica de navegação por teclado
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    if (e.key === 'Tab') {
      const focusable = Array.from(document.querySelectorAll(focusableElements));
      // Lógica para facilitar navegação por teclado
    }
  };

  return (
    <div className="accessibility-widget">
      <button 
        type="button"
        className="accessibility-toggle-button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Opções de acessibilidade"
      >
        <FontAwesomeIcon icon={faAccessibleIcon} 
        />
      </button>
      
      {isOpen && (
        <div className="accessibility-menu">
          <h3>Opções de Acessibilidade</h3>
          <div className="accessibility-options">
            <label className="accessibility-option">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={() => toggleSetting("highContrast")}
                aria-label="Alto contraste"
              />
              Alto Contraste
            </label>
            
            <label className="accessibility-option">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={() => toggleSetting("largeText")}
                aria-label="Texto grande"
              />
              Texto Grande
            </label>
            
            <label className="accessibility-option">
              <input
                type="checkbox"
                checked={settings.reduceMotion}
                onChange={() => toggleSetting("reduceMotion")}
                aria-label="Reduzir movimento"
              />
              Reduzir Movimento
            </label>
            
            <label className="accessibility-option">
              <input
                type="checkbox"
                checked={settings.screenReader}
                onChange={() => toggleSetting("screenReader")}
                aria-label="Compatibilidade com leitor de tela"
              />
              Leitor de Tela
            </label>
            
            <label className="accessibility-option">
              <input
                type="checkbox"
                checked={settings.keyboardNavigation}
                onChange={() => toggleSetting("keyboardNavigation")}
                aria-label="Navegação por teclado"
              />
              Navegação por Teclado
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityButton;