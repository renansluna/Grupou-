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
                        <DataTable.Title>Professor</DataTable.Title>
                        <DataTable.Title>Unidade</DataTable.Title>
                    </DataTable.Header>
                
                    <DataTable.Row>
                        <DataTable.Cell>Antônio Bezerra</DataTable.Cell>
                        <DataTable.Cell>ME/RC</DataTable.Cell>
                    </DataTable.Row>
                
                    <DataTable.Row>
                        <DataTable.Cell>Ricardo Mesquita</DataTable.Cell>
                        <DataTable.Cell>ME</DataTable.Cell>
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