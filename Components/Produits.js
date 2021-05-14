import * as React from 'react';
import {View,Text, TouchableOpacity, ImageBackground } from 'react-native';
import Images from './CollectionImage'
import Styles from './styles/styleConnect'
class Produits extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <TouchableOpacity 
                style= {{flex:1}}
                onPress = {()=>(this.props.navigation.navigation.navigate("Détails",{produit:this.props.produit}))}
            
            >
                <View style= {{flex:1,flexDirection:"row",padding:2}}>
                    <View style={{flex:1,backgroundColor:"#520606"}}>
                        <ImageBackground source={Images[this.props.produit.id]} style={{flex:1}} resizeMode="contain"/>
                    </View>
                    <View style= {{flex:2,backgroundColor:"black",flexDirection:"column"}}>
                        <View style= {[{flex:1,},Styles.title]}>
                            <Text style= {{color:"white",fontSize:25}}>{this.props.produit.nom}</Text>
                        </View>
                        <View style= {{flex:3,backgroundColor:"#520606",padding:5,height:100}}>
                            <Text style= {{color:"white",fontSize:15}}>{this.props.produit.description}</Text>
                        </View>
                        <View style= {{flex:1,backgroundColor:"#520606"}}>
                            <Text style= {{color:"white",fontSize:25,margin:15,alignSelf:"flex-end"}}>Ar {this.props.produit.prix}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
export default Produits