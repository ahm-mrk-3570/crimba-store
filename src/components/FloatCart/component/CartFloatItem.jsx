import { useContext } from 'react';
import './CartFloatItem.css';
import AuthContext from '../../../context/AuthContext';
import GlobalContext from '../../../context/Context';
import { handleRemove } from '../../../helpers/CartFunctions';

export default function CartFloatItem({product, cartItem}) {

  const { user } = useContext(AuthContext);
  const { setCartItems } = useContext(GlobalContext);

  return (
    <li className='cart-item'>
      <img src={product?.pictures?.[0]} alt="product-float" />
      <div className="product-detail-float">
        <span>{product?.name}</span>
        <span>{cartItem?.quantity} x ${(product?.price || 0).toFixed(2)}</span>
        <span>Size : <span>{cartItem?.selected_size}</span></span>
        <span>Color : <span>{cartItem?.selected_color}</span></span>
      </div>
      <button onClick={() => handleRemove(user, cartItem, setCartItems)} className="delete-float">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" className="bi bi-trash text-white" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
      </button>
    </li>
  )
}
