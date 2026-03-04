import AOS from "aos";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="section text-center">
      <div className="container">
        <h1 data-aos="fade-up">Hi, I'm Pallavi 👋</h1>
        <h3 data-aos="fade-up" data-aos-delay="200">
          .NET & React Developer
        </h3>

        <p data-aos="fade-up" data-aos-delay="400">
          Building scalable APIs & modern web apps.
        </p>

        <a
          href="/resume.pdf"
          className="btn btn-primary mt-3"
          data-aos="zoom-in"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Home;
