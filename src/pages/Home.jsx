import React from 'react';
import {Categories, SortPopup,PizzaBlock,LoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import { setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";

const categoryName = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItems = [{name:'популярности', type:'rating', order: 'desc'}, {name:'цене', type:'price', order: 'desc'},
    {name:'алфавиту', type:'name', order: 'asc'}]

function Home() {

    const items = useSelector(({pizzas}) => pizzas.items)
    const cartItems = useSelector(({cart}) => cart.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {sortBy,category} = useSelector(({filters}) => filters)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchPizzas(category,sortBy))
    },[category,sortBy])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    },[])

    const onSelectSort = React.useCallback((obj) => {
        dispatch(setSortBy(obj))
    },[sortBy])

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickCategory={onSelectCategory}
                            items={categoryName}
                            activeCategory = {category}/>
                <SortPopup items={sortItems} activeSortType={sortBy.type} onClickSortType={onSelectSort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                ? items&&
                    items.map(obj => (
                        <PizzaBlock key={obj.id} {...obj}
                                    onClickAddPizza={handleAddPizzaToCart}
                        addedCount={cartItems[obj.id]&& cartItems[obj.id].items.length}
                        />
                    ))
                    : Array(12).fill(0).map((_, index) => <LoadingBlock key={index}/>)
                }


            </div>
        </div>

    );
}

export default Home;