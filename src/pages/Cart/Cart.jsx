import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import OrderSummery from './OrderSummery/OrderSummery';
import PaymentSummery from './PaymentSummery/PaymentSummery';
import './Cart.css';

export default function Cart() {
  return (
    <div className='checkout-page container-custom'>
      <title>Cart</title>
      <div className="checkout-content">
        <h3>Cart</h3>
        <div className="checkout-section">
          <OrderSummery />
          <PaymentSummery buttonText="Go to checkout" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
