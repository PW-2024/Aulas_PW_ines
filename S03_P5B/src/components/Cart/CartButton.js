import classes from './CartButton.module.css';
import { useDispatch } from "react-redux"
import { UIActions } from "../../store/UISlice"; // Substitua com o caminho correto para seu slicer
import { useSelector } from "react-redux"

const CartButton = (props) => {
  const dispatch = useDispatch();
  const add = useSelector((state) => state.cart.amount);

  const clickButtonHandler = () => {
    dispatch(UIActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={clickButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{add}</span>
    </button>
  );
};

export default CartButton;



