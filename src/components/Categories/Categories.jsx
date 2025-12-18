import { CategoriesData } from "../../data/CategoriesData";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <h1 className="title title_categories">Browse By Categories</h1>
      <div className="categories-grid">
        {CategoriesData.map((item, index) => (
          <div
            key={index}
            className="category-card"
            style={{
              backgroundColor: item.background,
            }}
          >
            <div
              className="category-icon"
              style={{
                backgroundColor: item.iconBackgroundColor,
                borderColor: item.borderColor,
              }}
            >
              <img
                src={item.icon}
                alt={`${item.label} icon`}
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
