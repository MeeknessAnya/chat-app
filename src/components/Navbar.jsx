import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">MyChat</span>
            <div className="user">
                <img src="https://images.unsplash.com/photo-1664960599656-7f634fcc772f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1400&q=60" alt="" />
                <span>Meekness</span>
                <button>Logout</button>
            </div>
            
        </div>
    )
};


export default Navbar;