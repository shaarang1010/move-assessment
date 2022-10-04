import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Center } from 'native-base';
import { NativeBaseWrapper } from './providers/native-base/NativeBaseProvider';
import { Login } from './forms/login/Login';

function App() {
  return (
    <div className="App">
      <NativeBaseWrapper>
        <Center>
          <Login />
        </Center>
      </NativeBaseWrapper>
    </div>
  );
}

export default App;
