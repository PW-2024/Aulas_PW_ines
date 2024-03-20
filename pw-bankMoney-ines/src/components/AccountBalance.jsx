import React from 'react'
import { useSelector } from "react-redux"

const AccountBalance = () => {
  const balance = useSelector((state) => state.balance.value);

  return (
    <div>
      <p>Your balance is {balance}</p>
    </div>
  )
}

export default AccountBalance
