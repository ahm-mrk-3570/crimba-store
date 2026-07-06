export const FILTERS = ["All", "Activity", "Orders", "Promotions"];

export const FILTER_TYPES = {
  Activity: ["login", "register", "email_verified"],
  Orders: [
    "order_placed",
    "order_shipped",
    "order_delivered",
    "order_cancelled",
  ],
  Promotions: ["wishlist_sale", "promo"],
};

export const TYPE_META = {
  login: { icon: "ti-login", color: "blue", label: "Security" },
  register: { icon: "ti-user-check", color: "green", label: "Account" },
  email_verified: { icon: "ti-mail-check", color: "green", label: "Account" },
  order_placed: { icon: "ti-shopping-bag", color: "amber", label: "Order" },
  order_shipped: { icon: "ti-truck", color: "amber", label: "Order" },
  order_delivered: { icon: "ti-package", color: "green", label: "Order" },
  order_cancelled: { icon: "ti-x", color: "red", label: "Order" },
  wishlist_sale: { icon: "ti-heart", color: "pink", label: "Wishlist" },
  promo: { icon: "ti-tag", color: "purple", label: "Promo" },
};