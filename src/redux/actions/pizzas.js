import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    //baseURL: ``,
})

const setLoaded = (value) => ({
    type:'SET_LOADED',
    payload:value
})

export const fetchPizzas = (category,sortBy) => (dispatch) => {
    dispatch(setLoaded(false))
    instance.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order}`).then(
        ({data}) => dispatch(setPizzas(data)))
}

export const setPizzas = (items) => ({type:'SET_PIZZAS',payload:items})