import * as React from 'react'
import {Button, FlatList, Text, View,TouchableOpacity,ImageBackground } from 'react-native';
import Articles from '../Components/Articles'
import Styles from './styles/styleConnect'
import style from './styles/styleReservation'
import {connect} from 'react-redux'
class  Panier extends React.Component{
    constructor(props){
        super(props)
        this.total
        this.disabled
    }
    calculTotal(panier){
        let total = 0
        for (let i=0;i<panier.length;i++){
            total = total + panier[i].sousTotal
        }
        return total
    }
    render(){
        if (this.props.panier.length == 0){
            return(
                <View style={Styles.container}>
                    <Text style={Styles.title}>Votre panier est vide</Text>
                </View>
            )   
        }
        else
        {
            this.total = this.calculTotal(this.props.panier)
            return(
                <View style={[style.container,{paddingTop:2}]}>
                    <FlatList
                        data={this.props.panier}
                        renderItem={({ item }) => (
                            <Articles achat= {item} navigation={this.props} corbeille={this.corbeille} dispatch={this.props.dispatch} />
                            )}
                        keyExtractor={item => item.id}
                    />  
                    <Text style={style.text}>
                        Total : AR {this.total}
                    </Text>
                    <Button 
                        title="Confirmer Achat" 
                        onPress={()=>this.props.navigation.navigate('Adresse',{achat:this.props.panier,total:this.total})}
                        disabled = {false}
                    />
                </View>
        )}
    }
}
const mapStatetoProps = (state) => {
    return {
        panier : state.panier
    }
}
export default connect(mapStatetoProps)(Panier)