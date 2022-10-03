import React, { PropsWithChildren } from 'react';
import { NativeBaseProvider } from 'native-base';

export const NativeBaseWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <NativeBaseProvider>{children}</NativeBaseProvider>;
};
