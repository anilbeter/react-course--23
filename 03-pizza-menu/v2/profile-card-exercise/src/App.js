import "./style.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Anil Beter</h1>
      <p style={{}}>
        Web & Game Development my biggest hobby, also there is a quote that I
        love so much. "Dreams comes through those who truly want them."
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="💪" color="blue" />
      <Skill skill="CSS" emoji="💪" color="red" />
      <Skill skill="JAVASCRIPT" emoji="💪" color="aqua" />
      <Skill skill="REACT" emoji="💪" color="olive" />
      <Skill skill="C++" emoji="💪" color="gold" />
      <Skill skill="C#" emoji="💪" color="purple" />
    </div>
  );
}

function Skill({ skill, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

function Avatar() {
  return (
    <div className>
      <img className="avatar" src="ig.jpg" alt="anil" />
    </div>
  );
}
