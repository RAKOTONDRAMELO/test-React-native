import * as React from 'react';
import {View,Text, TouchableOpacity, ImageBackground,StyleSheet } from 'react-native';
import Styles from './styles/styleConnect'
class Commandes extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <TouchableOpacity 
                style= {{flex:1}}
                onPress = {()=>(
                    
                    this.props.navigation.navigate('DetailsCommande',{commande:this.props.commande})
                )}
            
            >
                <View style= {style.box}>
                    <View style= {[{flex:2,},Styles.title]}>
                        <Text style= {style.title}>Commande n°{this.props.commande.ref}</Text>
                    </View>
                    <View style= {{flex:1}}>
                        <Text style= {style.text}>Ar {this.props.commande.total}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
export default Commandes

const style = StyleSheet.create({
    box : {
        flex:1,
        backgroundColor:"black",
        flexDirection:"column",
        borderRadius:10,
        margin:2
    },
    title: {
        color: "white",
        fontSize : 40,
        textAlign : "center",
        margin:0
    },
    text : {
        color : "white",
        fontSize : 20,
        textAlign : "center",
    }
})