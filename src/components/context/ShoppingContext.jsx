import React, {createContext, useState} from 'react'

export const shoppingListContext = createContext([])

export default function ShoppingContext(props) {
    const [selectedItems, setSelectedItems] = useState([])
    return (
        <shoppingListContext.Provider value={{
            selectedItems, setSelectedItems
        }}>
            {props.children}
        </shoppingListContext.Provider>
    )
}
