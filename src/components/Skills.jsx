function Skills() {
  const skills = [
    ".NET core",
    "C#",
    "Sql server",
    "Web Api",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
