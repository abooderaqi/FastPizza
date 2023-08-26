/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartQuantityById } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currenQuantity = useSelector(getTotalCartQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center sm:gap-6">
        <p className="fotn-bold text-sm">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currenQuantity={currenQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
