import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from "react-redux"

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
      {cartItems.map(item => (
          <CartItem
            key={item.id} // Certifique-se de ter uma chave única para cada item na lista
            item={item}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
