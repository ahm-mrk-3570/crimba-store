import { createContext } from "react";

const CheckoutContext = createContext({
  checkoutData: {},
  setCheckoutData: () => {}
})

export default CheckoutContext;