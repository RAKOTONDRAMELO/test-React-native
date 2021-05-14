import {createStore} from 'redux'
import remplirPanier from './reducers/PanierReducer'

export default createStore(remplirPanier)