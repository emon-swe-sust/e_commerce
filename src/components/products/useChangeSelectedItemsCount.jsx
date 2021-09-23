import { useContext } from "react"
import { shoppingListContext } from "../context/ShoppingContext"

function useChangeSelectedItems(idx) {
  const { selectedItems, setSelectedItems, setTotalPrice, totalPrice } = useContext(shoppingListContext)
  const itemList = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

  const changeSelectedItemsCount = (changedItemCount) => {
    let currentItem = selectedItems.filter(({ id }) => id === idx)
    if (currentItem.length > 0) {
      // Setting the total price 
      setTotalPrice(selectedItems.map(({ count, price, id }) => {
        if (id === idx) return price * changedItemCount
        else return price * count
      }).reduce((total, price) => total + price, 0))

      if (changedItemCount < 1) {
        setSelectedItems(selectedItems.filter(({ id }) => id !== idx))
      } else {
        currentItem = currentItem[0]
        currentItem = { ...currentItem, count: changedItemCount }
        setSelectedItems(
          selectedItems.map(item => {
            if (item.id === idx) return currentItem
            else return item
          })
        )
      }
    } else {
      currentItem = itemList.filter(({ id }) => id === idx)
      currentItem = currentItem[0]
      currentItem = { ...currentItem, count: changedItemCount }
      // Setting the total price 
      setTotalPrice(totalPrice + currentItem.price)
      setSelectedItems([...selectedItems, currentItem])
    }
  }
  return changeSelectedItemsCount;
}
export default useChangeSelectedItems
