import { supabase } from "../lib/supabase";
import { addOrderItems, CreateOrder } from "../services/orderServices";

const handlePlaceOrder = async (navigate, user, totalPriceDiscount, address, cartItems, setOpenPortal) => {
  if (location.pathname === "/cart") {
    navigate("/checkout");
    return;
  }

  const finallyOrder = {
    user_id: user.id,
    status: "Pending",
    payment_status: "Pending",
    total_price: totalPriceDiscount + 15,
    address_id: address.id,
    shipping_name: address.full_name,
    shipping_address: address.address,
    shipping_city: address.city,
    shipping_country: address.country,
    shipping_state: address.state,
    shipping_postal_code: address.postal_code,
  };

  const { data: orderData, error: orderError } =
    await CreateOrder(finallyOrder);

  const orderItems = cartItems.map((item) => ({
    order_id: orderData?.id,
    product_id: item.products.id,
    product_name: item.products.name,
    product_image: item.products.pictures[0],
    selected_color: item.selected_color,
    selected_size: item.selected_size,
    quantity: item.quantity,
    price:
      item.products.discountprice > 0
        ? item.products.discountprice
        : item.products.price,
  }));

  const { data, error: orderItemsError } = await addOrderItems(orderItems);

  if (orderError || orderItemsError) {
    console.log(orderError);
    console.log(orderItemsError);
    return;
  }

  const { error: cartError } = await supabase
    .from("cart_items")
    .delete()
    .eq("user_id", user.id);

  if (cartError) return;

  setOpenPortal(true);
};

export default handlePlaceOrder;