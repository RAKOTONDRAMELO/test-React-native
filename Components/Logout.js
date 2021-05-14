import * as React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import styles from './styles/styleReservation'
import style from './styles/styleConnect'
import {connect} from 'react-redux'

class Logout extends React.Component {
    constructor (props){
      super(props)
    }
    Oui(navigation){
      const action = {type : "Vider"}
      this.props.dispatch(action)
      navigation.replace('Log In') 
    }
    Non(navigation){
      navigation.navigate('Produits')
    }
    render(){
      return (
        <View style={style.container}>
            <Text style={styles.text}>Voulez-vous vous déconnecter, effacer toutes vos commandes et vider votre panier ?</Text>
            <View style={{flexDirection:'row',justifyContent: 'center'}}>
              <TouchableOpacity
                style={style.button}
                onPress={()=>this.Oui(this.props.navigation)}
              >
                <Text style={style.textButton}>Oui</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.button}
                onPress={()=>this.Non(this.props.navigation)}
              >
                <Text style={style.textButton}>Non</Text>
              </TouchableOpacity>
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
export default connect(mapStatetoProps)(Logout)  
