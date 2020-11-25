
import React from 'react';
import Routes from './src/routes';
//onpress={() => navigation.navigate('pagina')}
import './services/firebase';
import { UsuarioProvider } from './src/context/user';
export default function App() {
  return (
    <UsuarioProvider>
      <Routes />
    </UsuarioProvider>
  );
}




