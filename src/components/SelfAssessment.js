import React from "react";
import "./SelfAssessment.css";

const SelfAssessment = () => {
  return (
    <section id="self-assessment" className="self-assessment-section">
      <div className="container">
        <h2>Auto-évaluation Globale</h2>
        <div className="assessment-grid">
          <div className="assessment-item">
            <div className="assessment-label">Niveau de compétence globale</div>
            <div className="assessment-value">Avancé</div>
          </div>
          <div className="assessment-item">
            <div className="assessment-label">Confiance en soi</div>
            <div className="assessment-value">Élevée</div>
          </div>
          <div className="assessment-item">
            <div className="assessment-label">Capacité d'adaptation</div>
            <div className="assessment-value">Très bonne</div>
          </div>
          <div className="assessment-item">
            <div className="assessment-label">Motivation</div>
            <div className="assessment-value">Très élevée</div>
          </div>
          <div className="assessment-item">
            <div className="assessment-label">Éthique professionnelle</div>
            <div className="assessment-value">Excellente</div>
          </div>
          <div className="assessment-item">
            <div className="assessment-label">
              Capacité de travail en équipe
            </div>
            <div className="assessment-value">Excellente</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfAssessment;
