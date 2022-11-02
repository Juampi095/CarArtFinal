import { BsCart } from "react-icons/bs";
import { useContext } from "react";
import {CartContext} from "../../Context/CartContext";

function CartWidget() {
  const { totalUnidades } = useContext(CartContext);
  const total = totalUnidades();

  if (total === 0) {
    return (
      <div>
        <span>
          <BsCart />
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span>
          <BsCart />
        </span>
        <span>{total}</span>
      </div>
    );
  }
}

export default CartWidget;