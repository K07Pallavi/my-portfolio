import {
  FaServer,
  FaDatabase,
  FaCode,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

function Skills() {
  return (
    <div className="section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Technical Expertise</h2>

        <div className="row g-4">
          {/* Backend */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm bg-dark text-light p-4">
              <FaServer size={30} className="text-info mb-3" />
              <h5>Backend Development</h5>
              <ul className="list-unstyled mt-3">
                <li>ASP.NET Core (.NET 6/7)</li>
                <li>ABP Framework</li>
                <li>Dapper & EF Core</li>
                <li>REST API Design</li>
                <li>Multi-Tenant Architecture</li>
              </ul>
            </div>
          </div>

          {/* Database */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm bg-dark text-light p-4">
              <FaDatabase size={30} className="text-info mb-3" />
              <h5>Database & Performance</h5>
              <ul className="list-unstyled mt-3">
                <li>SQL Server</li>
                <li>Stored Procedures</li>
                <li>Query Optimization</li>
                <li>Data Aggregation Logic</li>
              </ul>
            </div>
          </div>

          {/* Frontend */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm bg-dark text-light p-4">
              <FaCode size={30} className="text-info mb-3" />
              <h5>Frontend Basics</h5>
              <ul className="list-unstyled mt-3">
                <li>React (Vite)</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6)</li>
                <li>Bootstrap 5</li>
                <li>Responsive UI Design</li>
              </ul>
            </div>
          </div>

          {/* Security */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm bg-dark text-light p-4">
              <FaShieldAlt size={30} className="text-info mb-3" />
              <h5>Security & Authentication</h5>
              <ul className="list-unstyled mt-3">
                <li>JWT Authentication</li>
                <li>Role-Based Authorization</li>
                <li>Secure External APIs</li>
                <li>Base64 Encoding</li>
              </ul>
            </div>
          </div>

          {/* Tools */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm bg-dark text-light p-4">
              <FaTools size={30} className="text-info mb-3" />
              <h5>Tools & Integrations</h5>
              <ul className="list-unstyled mt-3">
                <li>Git & GitHub</li>
                <li>Postman</li>
                <li>SSMS</li>
                <li>Razorpay Integration</li>
                <li>Ai integrated Reports</li>
                <li>DinkToPdf & PuppeteerSharp </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
