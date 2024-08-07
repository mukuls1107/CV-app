import './styles/App.css'

function App() {
  
  return (
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
        <button className="cta-button">Build Your Resume</button>
        <div className="code-element closing-tag">&lt;/dev&gt;</div>
      </div>
      <div className="background-element"></div>
      <div className="floating-elements">
        <span className="float-item">{}</span>
        <span className="float-item">[]</span>
        <span className="float-item">()</span>
        <span className="float-item">&lt;/&gt;</span>
      </div>
    </div>
  )
}

export default App