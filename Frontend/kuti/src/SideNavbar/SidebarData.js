import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal, faUpload, faHouse } from '@fortawesome/free-solid-svg-icons'

const houseIcon = <FontAwesomeIcon icon={faHouse} />
const dashboardIcon = <FontAwesomeIcon icon={faGripHorizontal} />
const uploadIcon = <FontAwesomeIcon icon={faUpload} />

export const SidebarData = [
    {
        title: 'Home',
        icon: houseIcon,
        link: '/'
    },
    {
        title: 'Dashboard',
        icon: dashboardIcon,
        link: '/seller-dashboard'
    },
    {
        title: 'Upload items',
        icon: uploadIcon,
        link: '/add-item'
    }
];
