import pizzas from './pizzas'
import filters from './filters'
import {combineReducers} from "redux"
import cart from "./cart";

const rootReducer = combineReducers({
    pizzas,
    filters,
    cart
})

export default rootReducer