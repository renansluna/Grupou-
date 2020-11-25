import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles/styles'; 
import { DataTable } from 'react-native-paper';

export default class  ListaMaterias extends React.Component{
    
    
    render () {
        
        const { navigation } = this.props;   
            return (
                <View>
                    <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Matéria</DataTable.Title>
                        <DataTable.Title numeric>Turma</DataTable.Title>
                    </DataTable.Header>
                
                    <DataTable.Row>
                        <DataTable.Cell>Linguagens Formais</DataTable.Cell>
                        <DataTable.Cell numeric>857</DataTable.Cell>
                    </DataTable.Row>
                
                    <DataTable.Row>
                        <DataTable.Cell>Circuitos Digitais</DataTable.Cell>
                        <DataTable.Cell numeric>842</DataTable.Cell>
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
                        onPress={() => navigation.navigate('home')}>
                    <Text>Voltar</Text>
                    </TouchableOpacity>
                </View> 
                
            );
    };
}