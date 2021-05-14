import * as React from 'react'
import {View,Text, TouchableOpacity,ImageBackground } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Images from './CollectionImage'
import Styles from './styles/styleConnect'
import style from './styles/styleReservation'
import {connect} from 'react-redux'

class Detail extends React.Component{
    constructor(props){
        super(props)
        this.prix = this.props.route.params.produit.prix
        this.qt = 0
        this.state = {
            produit : this.props.route.params.produit,
            vuePrix :
                <Text style={[style.text,{alignSelf:"flex-start",textAlign:"left"}]}>Prix: Ar {this.prix}</Text>,
        }
    }
    panier(){
        const action = {type : "Ajouter",value : this.state.produit, quantité : this.qt}
        this.props.dispatch(action)
    }
    render(){
        return (
            <View style={Styles.container}>
                <View style={[{flex:1,flexDirection:"row",marginBottom:15}]} >
                    <ImageBackground source={Images[this.props.route.params.produit.id]} style={{flex:1}} resizeMode="contain"/>
                <View style={{flex:2,backgroundColor:Styles.red,flexDirection:"column"}}>
                <View style = {Styles.container}>
                    {this.state.vuePrix}
                </View>
                <View style = {[Styles.container]}>
                    <TextInput 
                        style = {[Styles.input,{marginTop:0}]}
                        placeholder="Quantité"
                        placeholderTextColor="white"
                        keyboardType = "numeric"
                        maxLength = {2}
                        onChangeText= {(text) => {
                            {
                                this.qt=text
                            }
                        }}
                                />
                            </View>
                            <View style = {[Styles.container]}>
                                <TouchableOpacity 
                                    style = {[Styles.button]}
                                    onPress = {() => {
                                        if (this.qt>0) {
                                            alert("Vous avez mis "+this.qt+" "+this.props.route.params.produit.nom+" dans votre panier")
                                            this.panier()
                                            this.props.navigation.goBack()
                                        }
                                        else{
                                            alert("Veuillez entrer un quantité valide supérieur à 0 svp!!")
                                        }
                                    }
                                }>
                                    <Text style={Styles.textButton}>Ajouter au panier</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    </View>
                    <View style={[Styles.container,{flex:2}]}>
                        <ScrollView>
                            <Text style={style.text}>{this.props.route.params.produit.description}</Text>
                        </ScrollView>
                    </View>
                </View>
            )
        }
    }
const mapStatetoProps = (state) => {
    return {
        panier : state.panier
    }
}
export default connect(mapStatetoProps)(Detail) 