import React from 'react'
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/">Bem-vindo</Link>
            <Link to="/recipes">Receitas</Link>
            <Outlet />
        </div>
    )
}

export default NavBar