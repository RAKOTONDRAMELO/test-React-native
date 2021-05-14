import * as React from 'react';
import {FlatList } from 'react-native';
import Produits from './Produits'
import DATA from '../json/data.json'

export default class  ListeProduits extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <FlatList
                data={DATA.produits}
                renderItem={({ item }) => (
                    <Produits produit= {item} navigation={this.props}/>)}
                keyExtractor={item => item.id}
            />
            
        )
    }
}