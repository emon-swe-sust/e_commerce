import React, {createContext, useState} from 'react'

export const shoppingListContext = createContext([])

export default function ShoppingContext(props) {
    const [itemList, setItemList] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    return (
        <shoppingListContext.Provider value={{
            itemList, setItemList, selectedItems, setSelectedItems
        }}>
            {props.children}
        </shoppingListContext.Provider>
    )
}
