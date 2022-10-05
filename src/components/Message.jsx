import React from "react";

const Message = () => {
    return (
        <div className="message">
            <div className="messageInfo">
                <img src="https://images.unsplash.com/photo-1664918696737-db7cf04d28b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60" alt="" />
            <span>Just Now</span>
            </div>
            <div className="messagesContent">
                <p>hello</p>
                <img src="https://images.unsplash.com/photo-1664918696737-db7cf04d28b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60" alt="" />
            </div>
        </div>
    )
}


export default Message;