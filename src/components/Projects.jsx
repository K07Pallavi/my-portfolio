function Projects() {
  const projects = [
    {
      title: "ActiveX – SaaS Healthcare Platform",
      desc: "Developed APIs to process 77+ device-generated medical parameters. Built day-wise, month-wise analytics APIs. Integrated Razorpay payment gateway with secure verification. Implemented AI-driven health report generation using DinkToPdf.",
    },
    {
      title: "PL Monitor – Financial Analytics Platform",
      desc: "Built APIs generating quarterly & annual financial reports combining text with calculated financial data. Created complex stored procedures with multiple result sets and optimized performance using TVPs.",
    },
  ];

  return (
    <div className="section">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>

        <div className="row">
          {projects.map((p, i) => (
            <div key={i} className="col-md-6 mb-4">
              <div className="card bg-dark text-white shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.desc}</p>
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
