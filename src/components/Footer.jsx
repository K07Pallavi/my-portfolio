import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container text-center">
        {/* Name & Title */}
        <h5 className="fw-bold mb-1">Pallavi Khandare</h5>
        <p className="text-secondary mb-4">Backend-Focused .NET Developer</p>

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-4 mb-4">
          <a
            href="https://github.com/K07Pallavi"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/pallavi-khandare-188406360/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:pallavikhandare5333@gmail.com"
            className="footer-icon"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        <hr className="border-secondary" />

        {/* Copyright */}
        <p className="small text-secondary mb-0">
          © {new Date().getFullYear()} Pallavi Khandare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
