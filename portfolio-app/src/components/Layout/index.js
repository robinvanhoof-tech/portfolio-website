import React from "react";
import { Outlet } from 'react-router-dom'

import Sidebar from "../Sidebar";


import './layout.scss'

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;