import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="section text-center d-flex align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="container">
        <h1 className="fw-bold" data-aos="fade-up">
          Hi, I'm Pallavi Khandare 👋
        </h1>

        <h4 className="text-info mt-3" data-aos="fade-up" data-aos-delay="200">
          Backend-Focused .NET Developer
        </h4>

        <p className="mt-4" data-aos="fade-up" data-aos-delay="400">
          I build secure, high-performance REST APIs using ASP.NET Core, ABP
          Framework, Dapper, and SQL Server. Experienced in SaaS healthcare &
          financial analytics systems, JWT authentication, stored procedures,
          and Razorpay integration.
        </p>

        <div className="mt-4" data-aos="zoom-in">
          <a
            href={`${import.meta.env.BASE_URL}Pallavi_Khandare_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary me-3"
          >
            View Resume
          </a>

          <Link to="/experience">View Experience</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
