import React, { useState } from "react";
import { categories } from "./data";
import { StyledDiv, StyledHeader, StyledLabel, StyledContainer, StyledButton } from "./styles";

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
   
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories([...selectedCategories, category]);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(selectedCategories);
  };
    
  return (
    <StyledContainer>
      <StyledHeader>Category Preferences</StyledHeader>
      <form onSubmit={handleSubmit}>
          {categories.map((category) => {
          return (
            <StyledDiv key={category}>
              <input
                  type="checkbox"
                  id={category}
                  value={category}
                  onChange={handleCategoryChange}
              />
              <StyledLabel htmlFor={category}>{category}</StyledLabel>
            </StyledDiv>
          );
          })}
          <StyledButton type="submit">Submit</StyledButton>
      </form>
    </StyledContainer>
  );
}

export default Categories;