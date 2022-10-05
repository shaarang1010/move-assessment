import React from 'react';
import { SignUpProps } from 'shared-models';
import { Box, Heading, VStack, FormControl, Input, Button, Avatar, Stack } from 'native-base';

export const SignUp: React.FC<SignUpProps> = ({
  firstname,
  lastname,
  avatar,
  password,
  setPassword,
  retypePassword,
  setRetypePassword,
  setFirstName,
  setLastName,
  onFormSubmit
}) => {
  const signUpOptions = [
    {
      label: 'Firstname',
      value: firstname,
      handler: setFirstName
    },
    {
      label: 'Lastname',
      value: lastname,
      handler: setLastName
    },
    {
      label: 'Password',
      value: password,
      handler: setPassword
    },
    {
      label: 'Confirm Password',
      value: retypePassword,
      handler: setRetypePassword
    }
  ];
  return (
    <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading
        size="lg"
        color="coolGray.800"
        _dark={{
          color: 'warmGray.50'
        }}
        fontWeight="semibold"
      >
        Welcome
      </Heading>
      <Heading
        mt="1"
        color="coolGray.600"
        _dark={{
          color: 'warmGray.200'
        }}
        fontWeight="medium"
        size="xs"
      >
        Sign up to continue!
      </Heading>
      <VStack space={3} mt="5">
        <Stack direction="row">
          <Avatar source={{ uri: `${avatar}.svg` }} />
        </Stack>
        {signUpOptions.map((option) => {
          return (
            <FormControl>
              <FormControl.Label>{option.label}</FormControl.Label>
              <Input value={option.value} onChangeText={(text: string) => option.handler(text)} />
            </FormControl>
          );
        })}
        <Button mt="2" colorScheme="indigo" onPress={onFormSubmit}>
          Sign up
        </Button>
      </VStack>
    </Box>
  );
};
