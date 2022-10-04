import React, { PropsWithChildren } from 'react';
import { NativeBaseProvider, Container } from 'native-base';

export const NativeBaseWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <NativeBaseProvider>
      <Container>{children}</Container>
    </NativeBaseProvider>
  );
};
