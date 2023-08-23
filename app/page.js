"use client";
import { useState, useRef, useEffect } from "react";

import About from "./pages/about";
import Resume from "./pages/resume";
import Typed from "typed.js";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  // const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [" Chief Financial Officer", " Entrepreneur","Financial Planner","Motivator","Financial Consultant"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();

    };
  }, []);
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="/assets/img/profile.png"
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">ADS</a>
            </h1>
            <div class="social-links mt-3 text-center">
              <a href="#" class="twitter">
                <i class="bx bxl-twitter"></i>
              </a>
              <a href="#" class="facebook">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="#" class="instagram">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="#" class="google-plus">
                <i class="bx bxl-skype"></i>
              </a>
              <a href="#" class="linkedin">
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              {/* <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link scrollto">
                  <i className="bx bx-server"></i> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Akhmad Dody</h1>
          <h1>Setiawan</h1>
          <p>
            I`m&nbsp;
            <span
              // className="typed"
              // data-typed-items="Designer, Developer, Freelancer, Photographer"
              ref={el}
            ></span>
            <p></p>
          </p>
        </div>
      </section>

      <main id="main">
        <About />
        <Resume />
      </main>

      <script
        defer
        src="/assets/vendor/purecounter/purecounter_vanilla.js"
      ></script>
      <script defer src="/assets/vendor/aos/aos.js"></script>
      <script
        defer
        src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
      ></script>
      <script defer src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script
        defer
        src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"
      ></script>
      <script defer src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script defer src="/assets/vendor/typed.js/typed.umd.js"></script>
      <script
        defer
        src="/assets/vendor/waypoints/noframework.waypoints.js"
      ></script>
      <script defer src="/assets/vendor/php-email-form/validate.js"></script>

      <script defer src="/assets/js/main.js"></script>
    </>
  );
}
