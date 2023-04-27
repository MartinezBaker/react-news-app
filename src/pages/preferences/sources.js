import React, { useState } from 'react';
import { sources } from './data';
import {
  StyledDiv,
  StyledHeader,
  StyledLabel,
  StyledContainer,
  StyledButton,
} from "./styles";

const Sources = () => {
    const [selectedSources, setSelectedSources] = useState([]);
    const handleSourceChange = (e) => {
        const source = e.target.value;
        setSelectedSources([...selectedSources, source]);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedSources);
    };
    
  return (
    <StyledContainer>
      <StyledHeader>Source Preferences</StyledHeader>
      <form onSubmit={handleSubmit}>
        {sources.map((source) => {
        return (
          <StyledDiv key={source.id}>
            <input
              type="checkbox"
              id={source.id}
              value={source.name}
              onChange={handleSourceChange}
            />
            <StyledLabel htmlFor={source.id}>{source.name}</StyledLabel>
          </StyledDiv>
        );
        })}
        <StyledButton type="submit">Submit</StyledButton>
      </form>
    </StyledContainer>
  );
}

export default Sources;