import * as React from 'react';
import {View,ScrollView,TextInput } from 'react-native';
import styles from './styles/styleConnect' 
import InfoPerso from './InfoPerso'
import {connect} from 'react-redux'
import ListeCommandes from './ListeCommandes';
class  Register extends React.Component{
    constructor (props){
        super (props)
        this.info = new Object()
        this.achat = this.props.route.params.achat
    }
    render(){
        return(
            <View style={[styles.container,{paddingTop:120}]}>
                <ScrollView style={{flex:1,backgroundColor:styles.red}}>
                    <InfoPerso 
                        inscription = {()=>{
                            if (this.info.rue && this.info.ville && this.info.etat && this.info.codepostal && this.info.pays){
                                alert("commande créer")
                                const action = {type : "Creation",value : this.achat,total:this.props.route.params.total}
                                this.props.dispatch(action)
                                this.props.navigation.goBack()
                            }
                            else
                                alert("Veuillez remplir tous les champs svp!!!")
                        }}
                        tableau = {this.info}
                    >
                    </InfoPerso>
                </ScrollView>  
            </View>
        )
    }
}

export default connect()(Register)