import React, { useState } from 'react';
import './styles/App.css';
import MainPage from './components/MainPage';

function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleButtonClick = () => {
    setShowMainPage(true);
  };

  return (
    <div className="app-container">
      {showMainPage ? (
        <MainPage />
      ) : (
        <div className="intro-container">
          <div className="intro-content">
            <div className="code-element">&lt;dev&gt;</div>
            <h1 className="intro-title">
              <span className="title-line">Craft Your</span>
              <span className="title-line">Developer Story</span>
            </h1>
            <p className="intro-description">
              Create a standout resume that speaks the language of tech.
              Free, powerful, and tailored for developers.
            </p>
            <button className="cta-button" onClick={handleButtonClick}>Build Your Resume</button>
            <div className="code-element closing-tag">&lt;dev /&gt;</div>
          </div>
          <div className="background-element"></div>
          <div className="floating-elements">
            <span className="float-item">{}</span>
            <span className="float-item">[]</span>
            <span className="float-item">()</span>
            <span className="float-item">&lt;&#47;&gt;</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
