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
          Software Developer | Backend & System Design Enthusiast
        </h4>

        <p className="mt-4" data-aos="fade-up" data-aos-delay="400">
          I design and develop scalable software solutions with a strong focus
          on backend architecture, API development, and database optimization.
          Experienced in building SaaS applications across healthcare and
          financial domains, implementing secure authentication systems, and
          integrating real-world business logic into production-grade systems.
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
          <Link to="/experience" className="btn btn-outline-info px-4 py-2">
            View Experience
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;
