const ChangeSelectedItems = (
  idx,
  changedItemCount,
  selectedItems,
  setSelectedItems
) => {
  let currentItem = selectedItems.filter(({ id }) => id === idx)
  const itemList = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
  if (currentItem.length > 0) {
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
    setSelectedItems([...selectedItems, currentItem])
  }
}

export default ChangeSelectedItems
