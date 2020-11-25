import React, { Component, useEffect, useState, useContext } from 'react';
import styles from './Styles/styles';
import { UsuarioContext } from '../context/user';
import { Text, Image, ActivityIndicator } from 'react-native';
import {
    Container,
    Texto,
    CaixaLogin,
    Botao,
    BotaoTexto,
    ContainerBotoes,
    Input,
    InputTexto,
    ContainerButtons,
    Button,
    ButtonText,
    ForgotPassword,
    Logo,
    CaixaTextoChamada,
    TextoChamada,
    TextoGrupou
} from './Styles/styles';

import { useNavigation } from '@react-navigation/native';

export default function Grupos() {
    const navigation = useNavigation();
    const {group, joinGroup, signIn, signUp} = useContext(UsuarioContext);
    function handleChat(chatId){
        joinGroup(chatId)
        navigation.navigate('chat')

    };

    return (
        <Container>
            <CaixaLogin>
                <ContainerBotoes>
                    <Botao>
                        <BotaoTexto onPress={()=> handleChat(1) }>Grupo 1</BotaoTexto>
                    </Botao>
                    <Botao>
                        <BotaoTexto onPress={()=> handleChat(2) }>Grupo 2</BotaoTexto>
                    </Botao>
                </ContainerBotoes>
            </CaixaLogin>
        </Container>
    );
}
