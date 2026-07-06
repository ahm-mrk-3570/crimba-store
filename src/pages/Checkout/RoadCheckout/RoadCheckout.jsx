import { useContext } from "react";
import "./RoadCheckout.css";
import CheckoutContext from "../../../context/CheckoutContext";
import { toast } from "react-toastify";

const Home = () => (
  <svg
    height={24}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714"
      stroke="#eee"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CardIcon = ({ step }) => (
  <svg
    height={24}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M17.1389 3.77777H6.86112C4.59061 3.77777 2.75 5.61839 2.75 7.88889V16.1111C2.75 18.3816 4.59061 20.2222 6.86112 20.2222H17.1389C19.4094 20.2222 21.25 18.3816 21.25 16.1111V7.88889C21.25 5.61839 19.4094 3.77777 17.1389 3.77777Z"
      style={{ stroke: "var(--text-primary)" }}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.25 8.91667H2.75"
      strokeLinecap="round"
      style={{ stroke: "var(--text-primary)" }}
      strokeLinejoin="round"
    />
    <path
      d="M6.21777 16.1111H11.3567"
      stroke={
        step !== "review"
          ? step === "card"
            ? "#aaa"
            : "var(--background)"
          : "#aaa"
      }
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Review = () => (
  <svg
    height={24}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M9 16.5V17.25M12 14.25V17.25M15 12V17.25M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z"
      style={{ stroke: "var(--text-primary)" }}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function RoadCheckout({ step, setStep }) {
  const { checkoutData } = useContext(CheckoutContext);

  return (
    <div className="road-checkout">
      <div
        className="road-home"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
        onClick={() => setStep(1)}
      >
        <Home />
      </div>
      <div
        className="road-card"
        style={{
          backgroundColor:
            step === "card"
              ? "var(--surface)"
              : step === "review"
                ? "var(--surface)"
                : "var(--background)",
          border: "1px solid var(--border)",
        }}
        onClick={() => {
          if (
            checkoutData.addressId === null ||
            checkoutData.addressId === ""
          ) {
            toast.error("please select address");
          } else {
            setStep(2);
          }
        }}
      >
        <CardIcon step={step} />
      </div>
      <div
        className="road-review"
        style={{
          backgroundColor:
            step === "review" ? "var(--surface)" : "var(--background)",
          border: "1px solid var(--border)",
        }}
        onClick={() => {
          if (
            (checkoutData.cardId === null &&
              checkoutData.shippingMethod === "card") ||
            (checkoutData.cardId === "" &&
              checkoutData.shippingMethod === "card")
          ) {
            toast.error("please select card or address");
          } else {
            setStep(3);
          }
        }}
      >
        <Review />
      </div>
      <div className="dashed-line-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.149 2.828">
          <line
            x1=".992"
            y1="1.414"
            x2="1.492"
            y2="1.414"
            fill="none"
            style={{
              stroke: "var(--border)",
            }}
            strokeMiterlimit="10"
            strokeWidth=".5"
          />
          <line
            x1="2.482"
            y1="1.414"
            x2="79.215"
            y2="1.414"
            fill="none"
            style={{
              stroke: "var(--border)",
            }}
            strokeDasharray=".99 .99"
            strokeMiterlimit="10"
            strokeWidth=".5"
          />
          <line
            x1="79.71"
            y1="1.414"
            x2="80.21"
            y2="1.414"
            fill="none"
            style={{
              stroke: "var(--border)",
            }}
            strokeMiterlimit="10"
            strokeWidth=".5"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.149 2.828">
          <line
            x1=".992"
            y1="1.414"
            x2="1.492"
            y2="1.414"
            fill="none"
            style={{ stroke: "var(--border)" }}
            strokeMiterlimit="10"
            strokeWidth=".5"
          />
          <line
            x1="2.482"
            y1="1.414"
            x2="79.215"
            y2="1.414"
            fill="none"
            style={{ stroke: "var(--border)" }}
            strokeDasharray=".99 .99"
            strokeMiterlimit="10"
            strokeWidth=".5"
          />
          <line
            x1="79.71"
            y1="1.414"
            x2="80.21"
            y2="1.414"
            fill="none"
            style={{ stroke: "var(--border)" }}
            strokeMiterlimit="10"
            strokeWidth=".5"
          />
        </svg>
      </div>
    </div>
  );
}
