const initialeState = {panier:[],commande:[]}

export default function remplirPanier(state=initialeState,action){
    let nextState
    
    switch (action.type) {
        case "Ajouter":
            //ajout dans le panier
            const articleIndex = state.panier.findIndex(item => item.produit.id === action.value.id)
            if (articleIndex !== -1){
                state.panier[articleIndex].qt = action.quantité
		        state.panier[articleIndex].sousTotal = action.quantité*action.value.prix
                nextState = {
                    panier:[ ...state.panier],
                    commande:[...state.commande]
                }
            }
            else{
                //action.value.qt = action.quantité
                //action.value.sousTotal = action.quantité*action.value.prix 
                nextState = {
                    panier:[ ...state.panier,{"produit":action.value,"qt":action.quantité,"sousTotal":action.quantité*action.value.prix}],
                    commande:[...state.commande]
                }
            }
            
            return nextState || state
            break;
        case "Supprimer":
            //suppression dans le panier
            const articleIndexSup = state.panier.findIndex(item => item.produit.id === action.value.id)
            var a = state.panier.splice(articleIndexSup,1);
            nextState = {
                ...state,
                panier: [...state.panier]
            }
            return nextState || state
            break;
        case "Vider":
            //vider le panier
            state = {
                commande:[],
                panier:[]
            }
            //nextState = initialeState
            return state
            break;
        case "Creation":
            //création commande
            let ref = state.commande.length+1
            nextState = {
                commande : [...state.commande,{"arona" : action.value,"total" : action.total,"ref":ref}],
                panier : []
            }
            return nextState || state 
        default:
            return state
            break;
    }
}