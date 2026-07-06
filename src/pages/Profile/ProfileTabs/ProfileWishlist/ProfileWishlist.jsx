import { useContext } from "react";
import "./ProfileWishlist.css";
import AuthContext from "../../../../context/AuthContext";
import Product from "../../../../components/Product/Product";
import WishlistsProduct from "../../../../components/WishlistsProduct/WishlistsProduct";
import GlobalContext from "../../../../context/Context";
import useWishlists from "../../../../hooks/useWishlists";

export default function ProfileWishlist() {
  const { user } = useContext(AuthContext);
  const { loading, wishlists } = useWishlists(user);

  return (
    <div className="grid-wishlist">
      <title>Favorites</title>
      {!loading ? (
        wishlists &&
          wishlists.map((w) => (
          <Product
            key={w.products.id}
            id={w.products.id}
            imgLocation={w.products.pictures[0]}
            title={w.products.name}
            description={w.products.description}
            hasDiscount={w.products.discountprice > 0}
            beforeDiscount={w.products.discountprice}
            afterDiscount={w.products.price}
            isWishlist={true}
            price={w.products.price}
            isAvailaible={w.products.count > 0}
            size={w.products.size}
            colors={w.products.colors}
          />
        ))
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}
