import { useContext } from 'react';
import './ProductsPageListing.css';
import GlobalContext from '../../../context/Context';
import useProducts from '../../../hooks/useProducts';

const ProductsPageListing = () => {
  const { page, setPage } = useContext(GlobalContext);

  const { totalPages } = useProducts(page);

  return (
    <div className='product-page-listing'>
      <div className='product-page-handler'>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            className={`page-number ${page === index + 1 && 'active-page-number'}`}
            key={index}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductsPageListing;