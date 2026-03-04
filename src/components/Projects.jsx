function Projects() {
  const projects = [
    {
      title: "ActiveX – Healthcare SaaS Platform",
      desc: "Engineered scalable REST APIs to ingest and process high-volume medical device data (77+ parameters), delivering structured patient analytics. Implemented secure Razorpay payment workflows and automated AI-driven health report generation with server-side PDF rendering.",
      tech: [
        "ASP.NET Core",
        "ABP Framework",
        "Dapper",
        "SQL Server",
        "Razorpay",
        "PuppeteerSharp",
        "JWT Auth",
        "Ai Integration",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "PL Monitor – Financial Analytics System",
      desc: "Designed a financial reporting engine generating structured quarterly and annual reports by combining calculated financial data with contextual insights. Optimized database performance using complex stored procedures.",
      tech: [
        "ASP.NET Core",
        "SQL Server",
        "Stored Procedures",
        "Dapper",
        "JWT Auth",
      ],
    },
  ];

  return (
    <div className="section">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>

        <div className="row">
          {projects.map((p, i) => (
            <div key={i} className="col-md-6 mb-4">
              <div className="card bg-dark text-white shadow h-100 border-0">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold mb-3">{p.title}</h5>
                  <p className="card-text flex-grow-1">{p.desc}</p>

                  {/* Tech Stack */}
                  <div className="mt-3">
                    {p.tech.map((t, index) => (
                      <span
                        key={index}
                        className="badge bg-secondary me-2 mb-2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
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
