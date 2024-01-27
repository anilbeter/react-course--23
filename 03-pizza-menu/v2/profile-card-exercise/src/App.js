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

function Intro() {}

function SkillList() {}

function Skill() {}

function Avatar() {
  return (
    <div className>
      <img className="avatar" src="ig.jpg" alt="anil" />
    </div>
  );
}
