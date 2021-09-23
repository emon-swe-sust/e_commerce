import React, {createContext, useState} from 'react'

export const shoppingListContext = createContext([])

export default function ShoppingContext(props) {
    const [selectedItems, setSelectedItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(
        selectedItems.map(({price}) => price).reduce((total, price)=>total+price,0))

    return (
        <shoppingListContext.Provider value={{
            selectedItems, setSelectedItems, totalPrice, setTotalPrice
        }}>
            {props.children}
        </shoppingListContext.Provider>
    )
}
