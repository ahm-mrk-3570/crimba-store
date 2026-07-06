import dayjs from 'dayjs';
import './ReviewOrder.css';
import ReviewProduct from './ReviewProduct/ReviewProduct';
import { useContext } from 'react';
import GlobalContext from '../../../../context/Context';
import useCart from '../../../../hooks/useCart';
import AuthContext from '../../../../context/AuthContext';

export default function ReviewOrder() {
  const date = new Date();
  const { user } = useContext(AuthContext);
  const { cartItems } = useCart(user);

  return (
    <div className='order-review'>
      <h3 className="order-date">
        Estimated Delivery : {dayjs(date).format("MMM DD, YYYY")}
      </h3>
      {cartItems && cartItems.map(item => {
        return (
          <ReviewProduct key={item.id} item={item} />
        )
      })}
    </div>
  )
}
