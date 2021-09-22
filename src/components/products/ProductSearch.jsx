import React from 'react'
import ItemCards from './ItemCards'
import Loading from './Loading'

function ProductSearch ({ itemList, searchedCategory, searchedItems }) {
  return (
    <div>
      {itemList.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-0 sm:px-20 md:px-20 xl:px-60'>
          {searchedCategory.length > 0
            ? itemList
                .filter(
                  ({ category, title }) =>
                    category === searchedCategory &&
                    title.toUpperCase().includes(searchedItems.toUpperCase())
                )
                .map(
                  ({
                    title,
                    id,
                    price,
                    description,
                    category,
                    image,
                    rating
                  }) => {
                    return (
                      <ItemCards
                        key={id}
                        title={title}
                        id={id}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                        rating={rating}
                      ></ItemCards>
                    )
                  }
                )
            : itemList
                .filter(({ title }) =>
                  title.toUpperCase().includes(searchedItems.toUpperCase())
                )
                .map(
                  ({
                    title,
                    id,
                    price,
                    description,
                    category,
                    image,
                    rating
                  }) => {
                    return (
                      <ItemCards
                        key={id}
                        title={title}
                        id={id}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                        rating={rating}
                      ></ItemCards>
                    )
                  }
                )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default ProductSearch
