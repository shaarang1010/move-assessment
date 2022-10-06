import React from 'react';
import { Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Text } from 'native-base';
import { LoginProps } from 'shared-models';

export const Login: React.FC<LoginProps> = ({
  setEmail,
  setPassword,
  onLoginFormHandler,
  email,
  password,
  onForgotPasswordHandler
}) => {
  return (
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        _dark={{
          color: 'warmGray.50'
        }}
      >
        Welcome
      </Heading>
      <Heading
        mt="1"
        _dark={{
          color: 'warmGray.200'
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="xs"
      >
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input value={email} onChangeText={(text: string) => setEmail(text)} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" value={password} onChangeText={(text: string) => setPassword(text)} />
          <Link
            onPress={onForgotPasswordHandler}
            _text={{
              fontSize: 'xs',
              fontWeight: '500',
              color: 'indigo.500'
            }}
            alignSelf="flex-end"
            mt="1"
          >
            Forget Password?
          </Link>
        </FormControl>
        <Button mt="2" colorScheme="indigo" onPress={onLoginFormHandler}>
          Sign in
        </Button>
      </VStack>
    </Box>
  );
};
