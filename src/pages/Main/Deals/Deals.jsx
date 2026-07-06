import TimerContainer from './TimerContainer';
import './Deals.css';
import { useNavigate } from 'react-router-dom';

export default function Deals() {
  const navigate = useNavigate();

  return (
    <div className='deals-container container-custom'>
      <div className="picture-container"></div>
      <div className="content-container">
        <div className="top-title-deals">
          <h2>Deals of the Month</h2>
          <h5>Refresh your entire wardrobe with our hottest monthly picks!
              From cozy everyday essentials and sharp streetwear to elegant pieces that turn heads — discover unbeatable prices on fresh arrivals and timeless favorites.
              Limited time only — grab yours before they're gone!
          </h5>
        </div>
        <div className="middle-timer-deals">
          <TimerContainer count={120} title='Days' />
          <TimerContainer count={18} title='Hours' />
          <TimerContainer count={15} title='Mins' />
          <TimerContainer count={10} title='Secs' />
        </div>
        <div className="view-all-product-container">
          <button className='view-all-product' onClick={() => navigate("/products")}>
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
