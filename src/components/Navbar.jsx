import React from "react"

const Navbar = () => {
    return(
        <div className="navbar">
            <span className="logo">MyChat</span>
            <div className="user">
                <img src="https://media.istockphoto.com/photos/carefree-africanamerican-girl-in-studio-picture-id1285993433?k=20&m=1285993433&s=612x612&w=0&h=wKecLbR_P3Gxt5bkXXAA7QfzBnL55HOc90IjXOM0D_o=" alt=""/>
                <span>Mary</span>
                <button>logout</button>
            </div>
        </div>
    )
}


export default Navbar
