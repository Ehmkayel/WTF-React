import notebook from "../../assets/images/notebook.svg";
import squared from "../../assets/images/squared-dot.svg";
import HeroImage from "../../assets/images/hero-image.svg?url";
import twig from "../../assets/icons/twig.svg";
import users from "../../assets/images/staccked-avatar.svg";
import Button from "../ReUsables/Button/Button";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero__subtitle">Welcome Edunity online courses</p>
          <h2 className="hero__title">
            Achieving Your Dreams Through Education
          </h2>
          <p className="hero__description">
            We are experienced in educational platform and skilled strategies
            for the success of our online learning.
          </p>
          <div>
            <Button
              variant="secondary"
              rightSection={<FaArrowRight color="white" />}
            >
              Find Courses
            </Button>
          </div>
          <img
            src={notebook}
            className="hero__bg-image hero__bg-image--notebook"
            alt="Notebook background"
          />
          <img
            src={twig}
            className="hero__decoration hero__decoration--twig"
            alt="Twig decoration"
          />
        </div>
        <div className="hero-image">
          <img
            src={squared}
            className="hero__bg-image hero__bg-image--squared"
            alt="Squared dots background"
          />
          <img
            src={HeroImage}
            alt="Hero illustration"
            className="hero__illustration"
          />

          <img
            src={users}
            alt="Users avatar stacked together"
            className="hero__decoration--users"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
