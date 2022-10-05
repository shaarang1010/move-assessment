import './App.css';
import { Center } from 'native-base';
import { NativeBaseWrapper } from './providers/native-base/NativeBaseProvider';
import { PropsWithChildren } from 'react';

export const App: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="App">
      <NativeBaseWrapper>
        <Center>{children}</Center>
      </NativeBaseWrapper>
    </div>
  );
};

export default App;
