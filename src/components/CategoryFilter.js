import React from "react";

function CategoryFilter({ categories, handleFilters }) {

  const categoryFilter = categories.map(category => {
    return (
      <button
        key={category}
        onClick={
          (e) => {
            handleFilters(e.target.value)
            e.target.className="selected"
          }
        }
      >{category}</button>
    )
   })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryFilter}

    </div>
  );
}

export default CategoryFilter;
