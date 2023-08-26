import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import { getCart } from "./cartSlice";

import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  function handleClear() {
    if (cart.length > 0) dispatch(clearCart());

    return;
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-3 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-300 border-b border-stone-300">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={handleClear}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
