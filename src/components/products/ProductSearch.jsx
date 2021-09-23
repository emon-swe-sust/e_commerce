import React from 'react'
import ItemCards from './ItemCards'
import NoItemFound from './NoItemFound'

function ProductSearch ({ items, searchedCategory, searchedItems }) {
  return (
    <div>
      {searchedCategory === 'ALL PRODUCTS' ? (
        <div>
          {items.filter(({ title }) =>
            title.toUpperCase().includes(searchedItems.toUpperCase())
          ).length < 1 && <NoItemFound />}
        </div>
      ) : (
        <div>
          {items.filter(
            ({ category, title }) =>
              category === searchedCategory &&
              title.toUpperCase().includes(searchedItems.toUpperCase())
          ).length < 1 && <NoItemFound />}
        </div>
      )}
      <div className='flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-auto  m-auto'>
          {searchedCategory === 'ALL PRODUCTS'
            ? items
                .filter(({ title }) =>
                  title.toUpperCase().includes(searchedItems.toUpperCase())
                )
                .map(
                  (item) => {
                    return (
                      <ItemCards
                        key={item.id}
                        item={item}
                      ></ItemCards>
                    )
                  }
                )
            : items
                .filter(
                  ({ category, title }) =>
                    category === searchedCategory &&
                    title.toUpperCase().includes(searchedItems.toUpperCase())
                )
                .map(
                  (item) => {
                    return (
                      <ItemCards
                        key={item.id}
                        item={item}
                      ></ItemCards>
                    )
                  }
                )}
        </div>
      </div>
    </div>
  )
}

export default ProductSearch
