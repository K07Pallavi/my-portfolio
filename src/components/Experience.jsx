function Experience() {
  return (
    <div className="section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Work Experience</h2>

        <div className="card bg-dark text-light shadow p-4">
          <h4 className="fw-bold">Software Developer</h4>

          <h6 className="text-info">Peracto Infotech Pvt. Ltd.</h6>

          <p className="text-secondary">May 2024 – Present</p>

          <hr className="border-secondary" />

          <ul>
            <li>
              Developed scalable SaaS backend applications using ASP.NET Core
              (.NET 6/7), ABP Framework, Dapper, and SQL Server.
            </li>
            <li>
              Designed and maintained secure REST APIs with multi-tenant
              architecture.
            </li>
            <li>
              Implemented JWT authentication and role-based authorization.
            </li>
            <li>
              Built complex stored procedures for financial and healthcare
              analytics.
            </li>
            <li>
              Integrated Razorpay payment gateway with secure verification
              logic.
            </li>
            <li>
              Optimized performance by reducing database round trips using TVPs.
            </li>
            <li>Worked on AI-based report generation and PDF conversion.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
