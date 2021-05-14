import * as React from 'react'
import { FlatList, Text, View } from 'react-native';
import Articles from '../Components/Articles'
import style from './styles/styleReservation'
class  DetailCommandes extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <View style={[style.container,{paddingTop:2}]}>
                <FlatList
                    data={this.props.route.params.commande.arona}
                    renderItem={({ item }) => (
                        <Articles achat= {item.produit} qt={item.qt} sousTotal={item.sousTotal} navigation={this.props} desactive={true}/>
                        )}
                    keyExtractor={item => item.produit.id}
                />  
                <Text style={style.text}>
                    Total : AR {this.props.route.params.commande.total}
                </Text>
            </View>
        )
    }
}
export default DetailCommandes