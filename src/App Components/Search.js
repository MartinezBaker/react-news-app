import React, { useState } from "react";
import axios from "axios";
import { SearchSVG } from "./SVG";
import { StyledInput, SearchFlexDiv, StyledDiv, SVGContainer } from "../styles";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchFlexDiv>
        <StyledDiv><SVGContainer><SearchSVG /></SVGContainer></StyledDiv>
        <StyledInput
          type="text"
          placeholder="Search Articles"
          value={searchTerm}
          onChange={handleChange}
        />
      </SearchFlexDiv>
    </form>
  );
};

export default Search;
