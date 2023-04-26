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
      <ImgDiv>
        <img
          style={{ width: "650px", borderRadius: "0 20px 20px 0" }}
          src={loginImage}
          alt="Login"
        />
      </ImgDiv>
    </FlexDiv>
  );
};

export default Account;