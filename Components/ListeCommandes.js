import * as React from 'react';
import {FlatList,View,Text } from 'react-native';
import Styles from './styles/styleConnect'
import Commandes from './Commandes'
import {connect} from 'react-redux'
class ListeCommandes extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        if (this.props.commande.length == 0){
            return(
                <View style={Styles.container}>
                    <Text style={Styles.title}>Vous n'avez pas encore passé de commande</Text>
                </View>
            )   
        }
        else{
            return(
            <FlatList
                data={this.props.commande}
                renderItem={({ item }) => (
                    <Commandes navigation={this.props.navigation} commande={ item }/>
                )}
                keyExtractor={item => item.ref.toString()}
            /> ) 
        } 
    }
}
const mapStatetoProps = (state) => {
    return {
        commande : state.commande
    }
}
export default connect(mapStatetoProps)(ListeCommandes)