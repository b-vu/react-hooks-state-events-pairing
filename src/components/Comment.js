import React from "react";

const Comment = ({comment, user}) => {
    return(
        <>
            <h2>{user}</h2>
            <p>{comment}</p>
        </>
    )
}

export default Comment;