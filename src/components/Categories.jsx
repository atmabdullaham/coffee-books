import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div role="tablist" className="tabs tabs-lift  ">
      {categories.map((category, i) => (
        <NavLink
          to={`/category/${category.category}`}
          key={i}
          role="tab"
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active text-lg font-semibold" : ""}`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
