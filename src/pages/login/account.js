import React from "react";
import { FlexDiv, StyledText, StyledHeader, LoginDiv, LinkDiv } from "./styles";

const Account = (props) => {
  return (
    <FlexDiv>
      <LoginDiv>
        <StyledHeader>{props.header}</StyledHeader>
        <StyledText>{props.subHeader}</StyledText>
        {props.formType}
        <LinkDiv>{props.linkText} {props.link}</LinkDiv>
      </LoginDiv>
    </FlexDiv>
  );
};

export default Account;