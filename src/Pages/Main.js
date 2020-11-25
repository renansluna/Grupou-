import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles/styles';

//onpress={() => navigation.navigate('pagina')}

export default function App() {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <Text>Bem-Vindo ao Grupou! Escolha uma das opções abaixo</Text>
        <TouchableOpacity 
            style={styles.TouchableOpacityMainScreen}
            onPress={() => navigation.navigate('login')}>
        <Text>Logar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.TouchableOpacityMainScreen}
            onPress={() => navigation.navigate('cadastro')}>
            <Text>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.TouchableOpacityMainScreen}
            onPress={() => navigation.navigate('home')}>
            <Text>Acesse sem uma conta</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
    </View>
    );
}




