import { Link } from "react-router-dom";

import "./Footer.css";

import GlobalContext from "../../context/Context";

import { useContext } from "react";

export default function Footer() {
  const { theme } = useContext(GlobalContext);

  return (
    <footer>
      <div className="footer-container container-custom">
        <div className="top-footer-section">
          <div className="address-company-footer">
            <div className="logo-section-footer">
              <img src="logo.svg" height={35} alt="Logo" />
              <h1>Crimba</h1>
            </div>
            <div className="phone-number-section-footer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              <span>(704) 555-0127</span>
            </div>
            <div className="email-section-footer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-envelope-at"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
              </svg>
              <span>crimba@example.com</span>
            </div>
            <div className="address-section-footer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <span>3891 Ranchview Dr. Richardson, California 62639</span>
            </div>
          </div>
          <div className="information-company-footer">
            <ul className="information-section-footer">
              <li className="footer-information-option footer-information-option-header">
                Information
              </li>
              <li className="footer-information-option">
                <Link to="/">My Account </Link>
              </li>
              <li className="footer-information-option">
                <Link to="/">Login </Link>
              </li>
              <li className="footer-information-option">
                <Link to="/">My Card </Link>
              </li>
              <li className="footer-information-option">
                <Link to="/">My Wishlist </Link>
              </li>
              <li className="footer-information-option">
                <Link to="/">Checkout </Link>
              </li>
            </ul>
          </div>
          <div className="service-company-footer">
            <ul className="information-section-footer">
              <li className="footer-service-option footer-service-option-header">
                Service
              </li>
              <li className="footer-service-option">
                <Link to="/">About Us</Link>
              </li>
              <li className="footer-service-option">
                <Link to="/">Careers</Link>
              </li>
              <li className="footer-service-option">
                <Link to="/">Delivery Information</Link>
              </li>
              <li className="footer-service-option">
                <Link to="/">Privacy Policy</Link>
              </li>
              <li className="footer-service-option">
                <Link to="/">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="subscribe-company-footer">
            <h3>Subscribe</h3>
            <p>
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>
            <div className="email-form-footer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="style=linear">
                  <g id="email">
                    <path
                      id="vector"
                      d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                      stroke={theme === "light" ? "currentColor" : "white"}
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      id="vector_2"
                      d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
                      stroke={theme === "light" ? "currentColor" : "white"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </g>
                </g>
              </svg>
              <div className="email-form-section-footer">
                <input type="text" id="email-contract" placeholder="Your Email" />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill={theme === "light" ? "currentColor" : "white"}
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bottom-footer-section">
          <div className="center-bottom-section">
            ©2023 Crimba All Rights all Reserved
          </div>
          <div className="right-bottom-section">
            <div className="social-media-logo">
              <svg
                height="35px"
                viewBox="0 0 24 24"
                id="facebook"
                xmlns="http://www.w3.org/2000/svg"
                className="icon flat-color"
                fill={theme === "light" ? "currentColor" : "white"}
              >
                <path
                  id="primary"
                  d="M14,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H14A5,5,0,0,0,9,7v3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9v7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14h2.22a1,1,0,0,0,1-.76l.5-2a1,1,0,0,0-1-1.24H13V7A1,1,0,0,1,14,6Z"
                ></path>
              </svg>
            </div>
            <div className="social-media-logo">
              <svg
                version="1.1"
                height={35}
                id="Icons"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
              >
                <path
                  style={{
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                  }}
                  d="M23,31H9c-4.4,0-8-3.6-8-8V9c0-4.4,3.6-8,8-8h14c4.4,0,8,3.6,8,8v14C31,27.4,27.4,31,23,31z"
                />
                <circle
                  style={{
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                  }}
                  cx="16"
                  cy="16"
                  r="7"
                />
                <circle
                  style={{
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                  }}
                  cx="24"
                  cy="7"
                  r="1"
                />
              </svg>
            </div>
            <div className="social-media-logo">
              <svg
                height="35px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="icon flat-color"
                fill={theme === "light" ? "currentColor" : "white"}
              >
                <path
                  id="primary"
                  d="M21.63,6.92a1,1,0,0,0-.83-.2,8.31,8.31,0,0,1-1.1.17,4.49,4.49,0,0,0-8.55.52c-2.73.67-5.4-2.07-5.43-2.1a1,1,0,0,0-1-.27,1,1,0,0,0-.7.8,11.69,11.69,0,0,0,1.51,8.67A7.25,7.25,0,0,1,3,15a1,1,0,0,0-.89,1.46C2.3,16.83,4.18,20,11.58,20c5.84,0,8-5.2,8.36-8.38A4,4,0,0,0,22,7.7,1,1,0,0,0,21.63,6.92Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
