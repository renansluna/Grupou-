import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles/styles';

export default function Cadastro() {
    const navigation = useNavigation();
    return (
        <View style={styles.loginContainer}>
            <Text>Cadastro</Text>
            <TextInput 
                style={styles.loginInputStyle}
            > 
            </TextInput>            
            <TextInput 
                style={styles.loginInputStyle}
            > 
            </TextInput>
            <TextInput 
                style={styles.loginInputStyle}
                secureTextEntry={true}
            > 
            </TextInput>
            <View style={styles.loginInputBox}>
            <Button 
                style={styles.buttonStyle}
                title="Criar" 
                mode="contained" 
                onPress={() => navigation.navigate('login')}
            >
            </Button>    
            <Button 
                style={styles.buttonStyle}
                title="Voltar" 
                mode="contained" 
                onPress={() => navigation.navigate('main')}
            >
            </Button>
            </View>          
        </View>
    );
}