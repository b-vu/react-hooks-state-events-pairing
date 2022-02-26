import React from "react";
import Comment from "./Comment";

const Comments = ({comments}) => {
    return(
        <div>
            <h1>{comments.length} Comments</h1>
            {
                comments.map(comment => {
                    return <Comment key={comment.id} comment={comment.comment} user={comment.user}></Comment>
                })
            }
        </div>
    )
}

export default Comments;