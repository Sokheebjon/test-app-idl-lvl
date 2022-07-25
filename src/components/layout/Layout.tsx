import React from "react";
import {FaHotel} from "react-icons/fa";
import {Link, Outlet, useLocation} from "react-router-dom";
import {ImHome} from "react-icons/im";
import {BiBookAdd} from "react-icons/bi";
import {MdMeetingRoom} from "react-icons/md";


const sidebar = [
    {
        path: "/",
        name: "Home",
        icon: <ImHome style={{marginRight: 5}}/>
    },
    {
        path: "/add-booking",
        name: "Add Booking",
        icon: <BiBookAdd style={{marginRight: 5}}/>
    },
    {
        path: "/check-room",
        name: "Check Room",
        icon: <MdMeetingRoom style={{marginRight: 5}}/>
    }
]

const Layout = () => {
    const {pathname} = useLocation();

    return (
        <div className="container">
            <h1><Link to="/"><FaHotel/> Booking system</Link></h1>
            <div className="row">
                <ul className="col-1">
                    {sidebar.map(({path, name, icon}, index) => (
                        <li className={pathname === path ? "active" : ""} key={index}><Link to={path}>
                            {icon} {name}</Link>
                        </li>
                    ))}
                </ul>
                <div className="col-2">
                    <div className="layout">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Layout;