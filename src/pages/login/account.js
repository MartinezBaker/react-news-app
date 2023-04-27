import React from "react";
import { FlexDiv, StyledText, StyledHeader, LoginDiv, ImgDiv, LinkDiv } from "./styles";
import loginImage from '../../assets/images/loginImage.jpg'

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