import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles/styles'; 
import { DataTable } from 'react-native-paper';

export default class  MeuUsuario extends React.Component{
    
    
    render () {
        
        const { navigation } = this.props;   
            return (
                <View>
                    <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Nome</DataTable.Title>
                        <DataTable.Title>Curso</DataTable.Title>
                        <DataTable.Title>Matricula</DataTable.Title>
                        <DataTable.Title>Sexo</DataTable.Title>
                    </DataTable.Header>
                
                    <DataTable.Row>
                        <DataTable.Cell>Renan Luna</DataTable.Cell>
                        <DataTable.Cell>CIC</DataTable.Cell>
                        <DataTable.Cell>555999</DataTable.Cell>
                        <DataTable.Cell>Masculino</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Pagination
                        page={1}
                        numberOfPages={3}
                        onPageChange={page => {
                            console.log(page);
                        }}
                        label="1-1 of 1"
                    />
                    </DataTable>

                    <TouchableOpacity 
                        style={styles.TouchableOpacityMainScreen}
                        onPress={() => navigation.navigate('main')}>
                    <Text>Logout</Text>
                    </TouchableOpacity>

                </View>   
            );
    };
}