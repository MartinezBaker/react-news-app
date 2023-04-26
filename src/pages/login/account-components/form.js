import React, { useState } from 'react';
import { StyledButtonDiv, StyledInput, StyledButton, StyledForm, StyledLabel } from '../styles';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
      <StyledForm>
        <div>
          <StyledLabel htmlFor="email">Email</StyledLabel>
        </div>
        <div>
          <StyledInput
            name="email"
            id="email"
            type="text"
            placeholder="Email"
            vaule={email}
          />
        </div>
        <div>
          <StyledLabel htmlFor="password">Password</StyledLabel>
        </div>
        <div>
          <StyledInput
            name="password"
            id="password"
            type="text"
            placeholder="Password"
            value={password}
          />
        </div>
        <StyledButtonDiv>
          <StyledButton type="submit">Sign in</StyledButton>
        </StyledButtonDiv>
      </StyledForm>
    );
}

export const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comparePassword, setComparePassword] = useState("");
  return (
    <StyledForm>
      <div>
        <StyledLabel htmlFor="firstName">First name</StyledLabel>
      </div>
      <div>
        <StyledInput
          name="fistName"
          id="firstName"
          type="text"
          placeholder="First name"
          vaule={firstName}
        />
      </div>
      <div>
        <StyledLabel htmlFor="lastName">Last name</StyledLabel>
      </div>
      <div>
        <StyledInput
          name="lastName"
          id="lastName"
          type="text"
          placeholder="Last name"
          value={lastName}
        />
      </div>
      <div>
        <StyledLabel htmlFor="email">Email</StyledLabel>
      </div>
      <div>
        <StyledInput
          name="email"
          id="eamil"
          type="text"
          placeholder="Email"
          value={email}
        />
      </div>
      <div>
        <StyledLabel htmlFor="password">Create password</StyledLabel>
      </div>
      <div>
        <StyledInput
          name="password"
          id="password"
          type="text"
          placeholder="Your password"
          value={password}
        />
      </div>
      <div>
        <StyledLabel htmlFor="comparePassword">Re-enter password</StyledLabel>
      </div>
      <div>
        <StyledInput
          name="comparePassword"
          id="comparePassword"
          type="text"
          placeholder="Re-enter your password"
          value={comparePassword}
        />
      </div>
      <StyledButtonDiv>
        <StyledButton type="submit">Sign up</StyledButton>
      </StyledButtonDiv>
    </StyledForm>
  );
};
