function Experience() {
  return (
    <div className="section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Work Experience</h2>

        <div className="card bg-dark text-light shadow-lg border-0 p-5">
          {/* Centered Role Info */}
          <div className="text-center">
            <h4 className="fw-bold mb-2">Software Developer</h4>
            <h6 className="text-info mb-1">Peracto Infotech Pvt. Ltd.</h6>
            <p className="text-secondary mb-3">May 2024 – Present</p>
          </div>

          {/* Professional Summary */}
          <p className="text-light mt-3 text-center px-md-5">
            Working as part of a cross-functional team to design, develop, and
            maintain production-grade backend systems with a strong focus on
            performance, scalability, and secure architecture.
          </p>

          <hr className="border-secondary my-4" />

          {/* Responsibilities */}
          <ul className="mb-0">
            <li>
              Contribute to the development of scalable SaaS applications across
              healthcare and financial analytics domains using ASP.NET Core, ABP
              Framework, Dapper, and SQL Server.
            </li>

            <li>
              Design and maintain secure, multi-tenant REST APIs with JWT-based
              authentication and role-based authorization.
            </li>

            <li>
              Architect and optimize complex SQL stored procedures for financial
              reporting and medical analytics workflows.
            </li>

            <li>
              Implement secure Razorpay payment integration with verification,
              recovery handling, and revenue calculations.
            </li>

            <li>
              Improve system performance by reducing database round trips using
              Table-Valued Parameters (TVPs) and efficient query design.
            </li>

            <li>
              Contribute to AI-driven report generation by structuring dynamic
              HTML templates and enabling server-side PDF rendering.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
