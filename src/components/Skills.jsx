function Skills() {
  const backend = [
    "ASP.NET Core (.NET 6/7)",
    "ABP Framework",
    "Dapper",
    "Entity Framework Core",
    "REST APIs",
    "JWT Authentication",
  ];

  const database = [
    "SQL Server",
    "Stored Procedures",
    "Query Optimization",
    "TVPs",
  ];

  const tools = ["Git", "Postman", "SSMS", "Razorpay", "Visual Studio"];

  return (
    <div className="section">
      <div className="container">
        <h2 className="text-center mb-5">Technical Skills</h2>

        <h5>Backend</h5>
        {backend.map((skill, i) => (
          <span key={i} className="badge bg-info me-2 mb-2">
            {skill}
          </span>
        ))}

        <h5 className="mt-4">Database</h5>
        {database.map((skill, i) => (
          <span key={i} className="badge bg-secondary me-2 mb-2">
            {skill}
          </span>
        ))}

        <h5 className="mt-4">Tools</h5>
        {tools.map((skill, i) => (
          <span key={i} className="badge bg-dark me-2 mb-2">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
