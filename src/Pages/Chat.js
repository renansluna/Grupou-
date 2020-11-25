import React, { Component, useEffect, useState, useContext } from 'react';
import {
    Container,
    Texto,
    ContainerButtons,
    Button,
    ButtonText,
    InputChat,
    ContainerMessages,
    Message
  
  } from './Styles/styles';
  
  import firebase from 'firebase'
  import 'firebase/firestore';
  import { UsuarioContext } from '../context/user';
const Chat = () => {

    const [messages, setMessages] = useState([]);
    const [messagesToShow, setMessagesToShow] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const { user, group } = useContext(UsuarioContext);

    const ListenUpdateMessages = (snap) => {
        const data = snap.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })
      // console.log(data)
        setMessages(data)
    }


    useEffect(() => {
        const listener = firebase.firestore()
        .collection('mensagens').onSnapshot(ListenUpdateMessages)
        return () => listener()
    }, [])

    const handleAddMessages = () => {
        if (newMessage == "") {
            console.warn('Preencha o campo')
            return
        }

        try {
            firebase.firestore().collection('mensagens').add({
            texto: newMessage,
            usuario: user.email,
            id: group,
            lida: false
        })
            setNewMessage("");
        } catch (err) {
        console.warn("erro de comunicação, tente mais tarde");
        }
    }

    return (
        <Container>
        <ContainerMessages>
            {messages.filter(message => message.id == group)
            .map(message => <Message >{user.email}: {message.texto}</Message>)}
        </ContainerMessages>

        <Texto>{user.email}</Texto>
        <ContainerButtons>

            <InputChat
                placeholder="Digite sua mensagem"
                onChangeText={text => setNewMessage(text)}
                value={newMessage}
            />

            <Button invert={true}
                onPress={() => { handleAddMessages() }}
            >
                <ButtonText invert={true}>Enviar</ButtonText>
            </Button>
        </ContainerButtons>
        </Container>
    )
  }
  
  export default Chat