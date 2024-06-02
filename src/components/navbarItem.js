import React from "react";

function NavBarItem({ href, label }) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={href}>{label}</a>
        </li>
    );
}

export default NavBarItem;
