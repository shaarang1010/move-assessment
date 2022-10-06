import React from 'react';
import { Box, HStack, Text, Link } from 'native-base';
import { LoginProps, SignUpProps } from 'shared-models';
import { Login } from '../../forms/login/Login';
import { SignUp } from '../../forms/sign-up/SignUp';

type SignInWidgetProps = LoginProps &
  SignUpProps & {
    isSignIn: boolean;
    toggleSignIn(): void;
  };

export const SignInWidget: React.FC<SignInWidgetProps> = ({
  setEmail,
  onLoginFormHandler,
  email,
  onForgotPasswordHandler,
  firstname,
  lastname,
  avatar,
  password,
  setPassword,
  retypePassword,
  setRetypePassword,
  setFirstName,
  setLastName,
  onFormSubmit,
  isSignIn,
  toggleSignIn
}) => {
  return (
    <Box alignSelf="center">
      {isSignIn ? (
        <Login
          onLoginFormHandler={onLoginFormHandler}
          email={email}
          setEmail={setEmail}
          onForgotPasswordHandler={onForgotPasswordHandler}
          password={password}
          setPassword={setPassword}
        />
      ) : (
        <SignUp
          firstname={firstname}
          lastname={lastname}
          avatar={avatar}
          password={password}
          setPassword={setPassword}
          retypePassword={retypePassword}
          setRetypePassword={setRetypePassword}
          setFirstName={setFirstName}
          setLastName={setLastName}
          onFormSubmit={onFormSubmit}
        />
      )}
      <HStack mt="6" justifyContent="center">
        <Text
          fontSize="sm"
          color="coolGray.600"
          _dark={{
            color: 'warmGray.200'
          }}
        >
          {isSignIn ? `I am a new user` : `Already have an account? `}
        </Text>
        <Link
          _text={{
            color: 'indigo.500',
            fontWeight: 'medium',
            fontSize: 'sm'
          }}
          onPress={toggleSignIn}
        >
          {}
        </Link>
      </HStack>
    </Box>
  );
};
