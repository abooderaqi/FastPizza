/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currenQuantity }) {
  const dispatch = useDispatch();
  function handleDecrease() {
    dispatch(decreaseItemQuantity(pizzaId));
  }
  function handleIncrease() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDecrease}>
        -
      </Button>
      <span className="text-sm font-medium ">{currenQuantity}</span>
      <Button type="round" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
