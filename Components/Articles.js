import * as React from 'react'
import {View,Image,StyleSheet,Text, TouchableOpacity,ImageBackground} from 'react-native'
import Images from './CollectionImage'

export default function Articles(props){
    return(
        <View style={[styles.container,{borderColor:"pink",borderWidth:3}]}>
            <ImageBackground source={Images[props.achat.id]} style={{flex:2}} resizeMode="contain"/>
            <View style={[styles.container,{backgroundColor:"green",flex:2}]}>
                <Text style={styles.text}>{props.achat.nom}</Text>
            </View>
            <View style={[styles.container,{backgroundColor:"red"}]}>
                <Text style={styles.text}>{props.qt}</Text>
            </View>
            <View style={[styles.container,{backgroundColor:"pink",flex:2}]}>
                <Text style={styles.text}>Ar {props.sousTotal}</Text>
            </View>
            <TouchableOpacity 
                style={[{flex:1,backgroundColor:"black"}]} 
                onPress={()=>{
                    const action = {type : "Supprimer",value : props.achat}
                    props.dispatch(action)
                }}
                disabled = {props.desactive}    
            >
                <ImageBackground source={require('../assets/image/corbeille.png')} style={{flex:1}} resizeMode="contain"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection:"row",
        flexWrap :"wrap" ,
        marginBottom : 1,
        marginTop:1,
    },
    image : {
        flex:1,
        width:20,height:20
    },
    text :{
        fontSize :20,
        margin :5,
    }
})