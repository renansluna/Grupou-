import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles/styles'; 
let USUARIO = require('./GlobalUserController');
import { UsuarioContext } from '../context/user';

const Home = () =>{
    
        const { user } = useContext(UsuarioContext);
        const navigation = useNavigation();
        
        //Para testar o outro fluxo troque o valor para 'false' no GlobalUserController
        if (user) {  
            return (
                <View style={styles.container}>
                    <Text>Bem-Vindo ao Grupou! Home - Renan Luna</Text>

                    <TouchableOpacity 
                        style={styles.TouchableOpacityMainScreen}
                        onPress={() => navigation.navigate('listaMaterias')}>
                    <Text>Procurar Matéria</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.TouchableOpacityMainScreen}
                        onPress={() => navigation.navigate('chat')}>
                    <Text>Chat</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.TouchableOpacityMainScreen}
                        onPress={() => navigation.navigate('listaProfessores')}>
                    <Text>Lista Professores</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.TouchableOpacityMainScreen}
                        onPress={() => navigation.navigate('listaAlunos')}>
                    <Text>Lista Alunos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.TouchableOpacityMainScreen}
                        onPress={() => navigation.navigate('meuUsuario')}>
                    <Text>Meu Usuário</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.TouchableOpacityMainScreen}
                        onPress={() => navigation.navigate('Login')}>
                    <Text>Logout</Text>
                    </TouchableOpacity>


                </View>
            );
        }

        else {
            return (
                <View style={styles.container}>
                    <Text>Para continuar visualizar todas as funcionalidade é necessário um login</Text>
                    <TouchableOpacity 
                        style={styles.TouchableOpacityMainScreen}
                        onPress={() => navigation.navigate('listaMaterias')}>
                    <Text>Procurar Matéria</Text>
                    </TouchableOpacity>
                </View>
            );
        }

    
}

export default Home;