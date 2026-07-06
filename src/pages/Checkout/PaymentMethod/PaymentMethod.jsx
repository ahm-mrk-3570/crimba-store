import RoadCheckout from '../RoadCheckout/RoadCheckout';
import './PaymentMethod.css';
import PaymentMethods from './PaymentMethods/PaymentMethods';

export default function PaymentMethod({ step, setStep }) {

  return (
    <div style={{display: step === 2 ? "flex" : "none"}} className='payment-method'>
      <RoadCheckout step='card' setStep={setStep} />
      <PaymentMethods setStep={setStep} />
    </div>
  )
}
