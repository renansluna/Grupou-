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
import logoImg from '../../assets/logo.png'; 

import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const [currentButton, setCurrentButton] = useState('aluno');
  const [email, setEmail] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [password, setPassword] = useState('');
    const navigation = useNavigation();
	const {signIn, signUp} = useContext(UsuarioContext);
	
function handleSignIn(){
    let isLogado = true;

    try{
        signIn(email, password)
    }catch(err) {
        console.warn(err);
        isLogado = false;
    }

    if(isLogado){
        navigation.navigate('grupos')
    }

};

function handleSignUp(){
    try{
        signUp(email, password)
    }catch(err) {
        console.warn(err);
    }
};

    return (
        <Container>

        <Logo>
          <Image source={logoImg} style={{ width: 300, height: 100 }} />
        </Logo>
  
        <CaixaTextoChamada>
          <TextoChamada>
            Problemas para formar
          </TextoChamada>
          <TextoChamada>
            um grupo de trabalho
          </TextoChamada>
          <TextoChamada>
            O <TextoGrupou>Grupou! </TextoGrupou>resolve!
          </TextoChamada>
        </CaixaTextoChamada>
  
        <CaixaLogin>
  
          <ContainerBotoes>
            <Botao onPress={() => {
              setCurrentButton('aluno')
            }}
              lastClick={currentButton == 'aluno' ? true : false}>
              <BotaoTexto
                lastClick={currentButton == 'aluno' ? true : false}>Aluno</BotaoTexto>
            </Botao>
            <Botao
              onPress={() => {
                setCurrentButton('professor')
              }}
              lastClick={currentButton == 'professor' ? true : false}>
              <BotaoTexto
                lastClick={currentButton == 'professor' ? true : false}>Professor</BotaoTexto>
            </Botao>
          </ContainerBotoes>
          <InputTexto>Email</InputTexto>
          <Input
            placeholder="Digite seu email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <InputTexto>Senha</InputTexto>
          <Input
            placeholder="Digite sua senha"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <ForgotPassword>
            esqueci minha senha
          </ForgotPassword>
          <ContainerButtons>
            <Button
              invert={true}
              onPress={() => { handleSignUp() }}
            >
              {carregando ?
                <ActivityIndicator color="#AE1B73" /> :
                <ButtonText invert={true}>
                  Cadastre-se
                </ButtonText>
              }
  
  
            </Button>
            <Button
              onPress={() => { handleSignIn() }}
            >
              <ButtonText>Entrar</ButtonText>
            </Button>
          </ContainerButtons>
  
  
        </CaixaLogin>
      </Container>
    );
}
