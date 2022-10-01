import React from 'react';

export type LoginProps = {
  email: string;
  password: string;
  setEmail(e: React.ChangeEvent<HTMLInputElement>): void;
  setPassword(e: React.ChangeEvent<HTMLInputElement>): void;
  onForgotPasswordHandler(): void;
  onLoginFormHandler(): void;
};
