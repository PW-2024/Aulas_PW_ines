import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { balanceActions } from "../store/balanceSlice"; // Substitua com o caminho correto para seu slicer


const WithDrawMoney = () => {
  const dispatch = useDispatch();
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const handleInputChange = (event) => {
    setWithdrawAmount(parseInt(event.target.value));
  };

  const withDrawHandler = (event) => {
    event.preventDefault();
    dispatch(balanceActions.decrement(withdrawAmount));
  };

  return (
    <div>
      <form>
        <input type='number' min='0' onChange={handleInputChange}></input>
        <button type='submit' name='balance' onClick={withDrawHandler}>WithDraw</button>
      </form>
    </div>
  )
}

export default WithDrawMoney
