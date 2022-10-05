import React from 'react';

export type LoginProps = {
  email: string;
  password: string;
  setEmail(text: string): void;
  setPassword(text: string): void;
  onForgotPasswordHandler(): void;
  onLoginFormHandler(): void;
};

export type SignUpProps = {
  firstname: string;
  lastname: string;
  avatar: string;
  password: string;
  retypePassword: string;
  setFirstName(text: string): void;
  setLastName(text: string): void;
  setPassword(text: string): void;
  setRetypePassword(text: string): void;
  onFormSubmit(): void;
};
