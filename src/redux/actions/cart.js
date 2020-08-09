import {ADD_PIZZA_CART} from "../reducers/cart";


export const addPizzaToCart = (pizzaObj) => ({type:ADD_PIZZA_CART,payload:pizzaObj})