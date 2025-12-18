import Categories from "../../components/Categories/Categories";
import Courses from "../../components/Courses/Courses";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

const LandingPage = () => {
  return (
    <section className="app-wrapper">
      <Header />
      <Hero />
      <Categories />
      <Courses />
    </section>
  );
};

export default LandingPage;
