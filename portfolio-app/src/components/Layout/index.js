import React from "react";
import { Outlet } from 'react-router-dom'

import Sidebar from "../Sidebar";


import './layout.scss'

const Layout = () => {
    return (
        <div className="App">
            <div className="navbar-container">
                <Sidebar />
            </div>
            <div className="page">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;