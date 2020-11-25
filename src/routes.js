import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from './Pages/Login';
import cadastro from './Pages/Cadastro';
import home from './Pages/Home';
import chat from './Pages/Chat';
import main from './Pages/Main';
import listaMaterias from './Pages/ListaMaterias';
import listaProfessores from './Pages/ListaProfessores';
import listaAlunos from './Pages/ListaAlunos';
import meuUsuario from './Pages/MeuUsuario';
import grupos from './Pages/Grupos';
const AppStack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
        
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="main" component={main} />
                <AppStack.Screen name="login" component={login} />
                <AppStack.Screen name="cadastro" component={cadastro} />
                <AppStack.Screen name="home" component={home} />
                <AppStack.Screen name="chat" component={chat} />
                <AppStack.Screen name="grupos" component={grupos} />
                <AppStack.Screen name="listaMaterias" component={listaMaterias} />
                <AppStack.Screen name="listaProfessores" component={listaProfessores} />
                <AppStack.Screen name="listaAlunos" component={listaAlunos} />
                <AppStack.Screen name="meuUsuario" component={meuUsuario} />
            </AppStack.Navigator>
        </NavigationContainer>

    );
};