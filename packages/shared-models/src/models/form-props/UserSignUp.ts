import React from 'react';

export type LoginProps = {
  email: string;
  password: string;
  setEmail(e: React.ChangeEvent<HTMLInputElement>): void;
  setPassword(e: React.ChangeEvent<HTMLInputElement>): void;
  onForgotPasswordHandler(): void;
  onLoginFormHandler(): void;
};

export type SignUpProps = {
  firstname: string;
  lastname: string;
  avatar: string;
  password: string;
  retypePassword: string;
  setFirstName(e: React.ChangeEvent<HTMLInputElement>): void;
  setLastName(e: React.ChangeEvent<HTMLInputElement>): void;
  setAvatarUrl(e: React.ChangeEvent<HTMLInputElement>): void;
  setPassword(e: React.ChangeEvent<HTMLInputElement>): void;
  setRetypePassword(e: React.ChangeEvent<HTMLInputElement>): void;
  onFormSubmit(): void;
};
