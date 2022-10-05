import React from "react";

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a user"/>
            </div>
            <div className="userChat">
                <img src="https://images.unsplash.com/photo-1664918696737-db7cf04d28b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60" alt="" />
                <div className="userChatInfo">
                    <span>Chioma</span>
                </div>
            </div>
        </div>
    )
};


export default Search;