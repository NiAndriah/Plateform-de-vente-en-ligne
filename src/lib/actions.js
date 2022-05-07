/*
 *  actions type 
 */

export const actions = {
    ADD_TO_CART : "ADD_TO_CART",
    UPDATE_TO_CART : "UPDATE_TO_CART",
    REMOVE_FROM_CART : "REMOVE_FROM_CART"
}

/*
 *  actions creators 
 */

const uid = ()=> Math.random().toString(34).slice(2);
export function addToCart(item, quantity) {
    return {
        type : actions.ADD_TO_CART,
        payload : {id:uid(), details:item, quantity:quantity}
    }
}

export function updateToCart(item, quantity) {
    return {
        type : actions.UPDATE_TO_CART,
        payload : {item:item, quantity:quantity}
    }
}

export function removeFromCart(id) {
    return {
        type : actions.REMOVE_FROM_CART,
        payload : id
    }
}