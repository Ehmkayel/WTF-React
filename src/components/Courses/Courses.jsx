import { FaArrowRight } from "react-icons/fa";
import { CoursesData } from "../../data/CoursesData";
import Button from "../ReUsables/Button/Button";
import "./Courses.css";

const Courses = () => {
  return (
    <section className="popular-courses">
      <div className="container">
        <div className="courses-header">
          <h1 className="section-subtitle">TOP POPULAR COURSE</h1>
          <div className="section-label">
            <h1 className="title section-title">
              Edunity Course Student Can Join With Us.
            </h1>
            <Button>Load More Course</Button>
          </div>
        </div>

        <div className="courses-grid">
          {CoursesData.map((course) => (
            <div key={course.id} className="course-card">
              <div>
                <div className="course-header">
                  <img src={course.image} />
                  <span className="course-category">{course.category}</span>
                </div>

                <div className="course-rating">
                  <div>
                    <span className="rating-stars">★★★★★</span>
                    <span className="rating-value">{course.rating}</span>
                  </div>

                  <span className="rating-price">{course.price}</span>
                </div>
              </div>

              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>

                <div className="course-info">
                  <span className="info-item">
                    <img src={course.icon} alt="note icon" />
                    <p>Lesson {course.lessons}</p>
                  </span>
                  <span className="info-item">
                    <img src={course.iconAlarm} alt="alarm icon" />
                    <p> {course.duration}</p>
                  </span>
                  <span className="info-item">
                    <img src={course.iconUser} alt="user icon" />
                    <p> Students {course.students}</p>
                  </span>
                </div>

                <div className="course-footer">
                  <div className="instructor-info">
                    <img
                      src={course.instructor.image}
                      alt={`${course.instructor.name} image`}
                    />
                    <h4 className="instructor-name">
                      {course.instructor.name}
                    </h4>
                  </div>

                  <Button
                    variant="primary"
                    rightSection={<FaArrowRight color="white"/>}
                    onClick={() => console.log(`Enroll in ${course.title}`)}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
