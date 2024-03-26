import classes from './CartItem.module.css';
import { useDispatch } from "react-redux";
import { CartActions } from '../../store/CartSlice';

const CartItem = (props) => {
  const { id, title, quantity, totalPrice, price } = props.item;
  // console.log(title + " " + price);
  const dispatch = useDispatch();

  const addCartHandler = () => {
    dispatch(CartActions.addItem({ id, title, price }));
  }
  const removeCartHandler = () => {
    dispatch(CartActions.removeItem({ id }));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartHandler}>-</button>
          <button onClick={addCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
