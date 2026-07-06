import './Review.css';
import RoadCheckout from '../RoadCheckout/RoadCheckout';
import ReviewOrder from './ReviewOrder/ReviewOrder';
import ReviewAddress from './ReviewAddress/ReviewAddress';
import ReviewPayments from './ReviewPayments/ReviewPayments';

export default function Review({ step, setStep }) {
  return (
    <div style={{display: step === 3 ? "flex" : "none"}} className='review-checkout'>
      <RoadCheckout step="review" setStep={setStep} />
      <ReviewOrder />
      <ReviewAddress setStep={setStep} />
      <ReviewPayments setStep={setStep} />
    </div>
  )
}