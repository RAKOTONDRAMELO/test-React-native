import * as React from 'react';
import { View, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import styles from './styles/styleConnect' 
import InfoPerso from './InfoPerso'

function Reservation(props) {
  var titreReservation = new Object()
  const screen = 'Calendar'
  const route ='booking'
  titreReservation.date=props.route.params.date.daty
    return (
      <View style={[styles.container,{paddingTop:120,backgroundColor:"black"}]}>
        <ScrollView style={{flex:1,backgroundColor:"black"}}>
            <InfoPerso 
              inscription={()=>{
                if (titreReservation.nombreDePersonnes){
                  if (titreReservation.nom && titreReservation.prenom && titreReservation.cin && titreReservation.tel && titreReservation.adresse)
                    alert("COUCOU")
                  else
                    alert("Veuillez remplir tous les champs svp!!!")
                }else{
                  alert("Veuillez remplir tous les champs svp!!!")
                }
                
              }}
              retour={()=>{
                props.navigation.goBack()
              }}
              button1="Réserver"
              button2="Annuler"
              tableau={titreReservation}
            >
              <TextInput
                  style={styles.input}
                  placeholder="Date"
                  value = {props.route.params.date.daty}
                  placeholderTextColor="white"
              />
              <TextInput
                style={styles.input}
                placeholder="Nombres de personnes"
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText= {(text) => {
                                {titreReservation.nombreDePersonnes=text}
                            }}
              />
            </InfoPerso>
        </ScrollView>  
    </View>
    );
  }

export default Reservation