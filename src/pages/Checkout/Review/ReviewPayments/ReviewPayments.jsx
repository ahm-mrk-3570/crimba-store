import { useContext } from 'react';
import './ReviewPayments.css';
import CheckoutContext from '../../../../context/CheckoutContext';
import _ from 'lodash';
import { chunking } from '../../../../helpers/chunk';

export default function ReviewPayments({ setStep }) {

  const { checkoutData } = useContext(CheckoutContext);

  return (
    <div className='review-payments'>
      <h4>Payment Method</h4>
      <div className="selected-payment">
        <div className="detail-selected-payment">
          <h5>{_.upperFirst(checkoutData.shippingMethod)} {checkoutData.shippingMethod === "card" ? `(${chunking(checkoutData?.cardId, true)})` : ""}</h5>
        </div>
        <div className="edit-payment" onClick={() => setStep(2)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
