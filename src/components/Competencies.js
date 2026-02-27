import React from "react";
import "./Competencies.css";

const Competencies = () => {
  return (
    <section id="competencies" className="competencies-section">
      <div className="container">
        <h2>Compétences</h2>
        <div className="competency-blocks">
          {/* Add competency blocks here */}
          <div className="competency-block">
            <div className="block-header">
              <div className="block-number">01</div>
              <h3>Compétences Techniques</h3>
            </div>
            <div className="competency-grid">
              <div className="competency-item">
                <div className="competency-label">HTML5 & CSS3</div>
                <div className="competency-value">Avancé</div>
              </div>
              <div className="competency-item">
                <div className="competency-label">JavaScript (ES6+)</div>
                <div className="competency-value">Intermédiaire</div>
              </div>
              <div className="competency-item">
                <div className="competency-label">React</div>
                <div className="competency-value">Débutant</div>
              </div>
              <div className="competency-item">
                <div className="competency-label">Node.js</div>
                <div className="competency-value">Intermédiaire</div>
              </div>
            </div>
          </div>
          {/* Add more blocks as needed */}
          <div className="competency-block">
            <div className="block-header">
              <div className="block-number">07</div>
              <h3>Auto-évaluation Globale</h3>
            </div>
            <div className="competency-grid">
              <div className="competency-item">
                <div className="competency-label">
                  Niveau de compétence globale
                </div>
                <div className="competency-value">Avancé</div>
              </div>
              <div className="competency-item">
                <div className="competency-label">Confiance en soi</div>
                <div className="competency-value">Élevée</div>
              </div>
              <div className="competency-item">
                <div className="competency-label">Capacité d'adaptation</div>
                <div className="competency-value">Très bonne</div>
              </div>
              <div className="competency-item">
                <div className="competency-label">Motivation</div>
                <div className="competency-value">Très élevée</div>
              </div>
              <div className="competency-item">
                <div className="competency-label">Éthique professionnelle</div>
                <div className="competency-value">Excellente</div>
              </div>
              <div className="competency-item">
                <div className="competency-label">
                  Capacité de travail en équipe
                </div>
                <div className="competency-value">Excellente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
