import React from 'react'
import { Outlet } from 'react-router-dom'

const WelcomingPage = () => {
  return (
    <div>
      <header >
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 2
        </a> */}
        <h1>Página de Boas Vindas</h1>
        <h6>Bem-vindo à página de receitas</h6>
      </header>
      <Outlet/>
    </div>
  )
}

export default WelcomingPage