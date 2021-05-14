import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import styles from './styles/styleConnect' 

export default function InfoPerso(props){
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder="Rue"
                placeholderTextColor="white"
                onChangeText= {(text) => {
                                {props.tableau.rue=text}
                            }}
            />
            <TextInput
                style={styles.input}
                placeholder="Ville"
                placeholderTextColor="white"
                onChangeText= {(text) => {
                                {props.tableau.ville=text}
                            }}
            />
            <TextInput
                style={styles.input}
                placeholder="Etat"
                placeholderTextColor="white"
                onChangeText= {(text) => {
                                {props.tableau.etat=text}
                            }}
            />
            <TextInput
                style={styles.input}
                placeholder="Code postal"
                placeholderTextColor="white"
                onChangeText= {(text) => {
                                {props.tableau.codepostal=text}
                            }}
            />
            <TextInput
                style={styles.input}
                placeholder="Pays"
                placeholderTextColor="white"
                onChangeText= {(text) => {
                                {props.tableau.pays=text}
                            }}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={props.inscription}
            >
                <Text style={styles.textButton}>Valider</Text>
            </TouchableOpacity>
        </View>
    )
}
                   