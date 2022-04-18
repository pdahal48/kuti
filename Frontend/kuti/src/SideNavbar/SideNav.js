import React, { useContext } from "react";
import { SidebarData } from "./SidebarData";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import CustomersContext from "../Customers/CustomersContext";
import './Styles/SideNav.css'

const userIcon = <FontAwesomeIcon icon={faCircleUser} color={'rgb(3, 202, 252)'} size={'4x'}/>

function SideNav({ logoutFunc }) {

    const { currentUser } = useContext(CustomersContext);
    console.log(logoutFunc)
    const navigate = useNavigate();

    const handleChange = () => {
        var selectBox = document.getElementById("selectBox");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        // selectedValue === 'logout' && logoutFunc();
    }

    return (
        <div className="sideNav">
            <ul className="sideNav-list mt-3">
            <li key={'userIcon'} className="userIcon align-items-center my-5">
                <div id="icon">{userIcon}</div>
                <div id="title">
                    <select onChange={handleChange} id={'selectBox'}>
                        <option value={currentUser.customer.fullname}>{currentUser.customer.fullname}</option>
                        <option value={'logout'}>Logout</option>
                    </select>
                </div>
            </li>
                {SidebarData.map((val, key) => {
                    return (
                        <div>
                            <li 
                                key={key} 
                                className="row"
                                id={window.location.pathname === val.link ? 'active' : ''}
                                onClick={() => navigate(`${val.link}`)}
                            >
                                {" "}
                                <div id="icon">{val.icon}</div>{" "}
                                <div id="title">{val.title}</div>
                            </li>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default SideNav;