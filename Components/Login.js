import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles/styleConnect' 
import data from '../json/data.json'

export default function LogIn({navigation}){
    var login = new Object()
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nom d'utilisateur"
                placeholderTextColor="white"
                onChangeText= {(text) => {
                                {login.username=text}
                            }}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                placeholderTextColor="white"
                onChangeText= {(text) => {
                                {login.mdp=text}
                            }}
                secureTextEntry = {true}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    if (login.mdp && login.username){
                        let stop = false
                        for (let i=0 ; i<data.users.length  ; i++){
                            if (login.mdp === data.users[i].username && login.username === data.users[i].password){
                                navigation.replace('Client')
                                i=data.users.length
                                stop=true
                            }
                        }
                        if(stop == false){
                                alert("Veuillez entrer des informations correctes svp")
                                navigation.replace('Log In')
                            }
                    }else {
                        alert("Veuillez remplir tous les champs svp")
                    }
                }}
            >
                <Text style={styles.textButton}>Se connecter</Text>
            </TouchableOpacity>
        </View>      
    )
}
