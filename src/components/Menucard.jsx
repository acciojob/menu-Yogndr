import React from "react";

const Menucard = ({ img, title, desc, category, price }) => {
  return (
    <div
      className="menu-item"
      data-test-id={`menu-item-${category.toLowerCase()}`}
    >
      <img src={img} alt={title} width={100} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <p className="price">${price}</p>
    </div>
  );
};

export default Menucard;