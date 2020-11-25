import React, {createContext, useState, useEffect} from 'react';
import firebase from 'firebase';
import 'firebase/auth';

const UsuarioContext = createContext({});

const UsuarioProvider = ({ children })=>{

    const [user, setUser] = useState(null);
    const [group, setGroup] = useState(null);
    
    const ListenAuth = (userState) => {
        setUser(userState);
    }
    
    useEffect(()=>{
        const listener = firebase.auth().onAuthStateChanged(ListenAuth);
        return listener;
    },[])

    const signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(resp =>{
            console.warn(resp);
        })
        .catch(err=>{
            console.warn(err);
        })
    }

    const signUp = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(resp =>{
            console.warn(resp);
        })
        .catch(err=>{
            console.warn(err);
        })
    }


    const signOut = (email, password) => {
        firebase.auth().signOut()
        .then(resp =>{
            console.warn('Usuario deslogado');
        })
        .catch(err=>{
            console.warn(err);
        })
    }

    const joinGroup = (groupId) => {
        setGroup(groupId)
    }

    return(
        <UsuarioContext.Provider value={{ user, group, joinGroup, signIn, signUp, signOut}}>
            {children}
        </UsuarioContext.Provider>
    )
}

export { UsuarioContext, UsuarioProvider }