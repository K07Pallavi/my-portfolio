function Projects() {
  const projects = [
    {
      title: "Financial API System",
      desc: "Built dynamic financial report APIs with SQL & .NET",
      github: "#",
    },
    {
      title: "Patient Diet System",
      desc: "Handled multi-tenant architecture & report generation",
      github: "#",
    },
  ];

  return (
    <div className="section">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>

        <div className="row">
          {projects.map((p, i) => (
            <div key={i} className="col-md-6 mb-4">
              <div className="card bg-dark text-white h-100 shadow">
                <div className="card-body">
                  <h5>{p.title}</h5>
                  <p>{p.desc}</p>
                  <a href={p.github} className="btn btn-primary btn-sm">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
