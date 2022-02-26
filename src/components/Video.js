import {React, useState} from "react";
import Button from "./Button";
import Comments from "./Comments";

const Video = ({embedUrl, title, views, createdAt, upvotes, downvotes, comments}) => {
    const [votes, setVotes] = useState({
        upvotes: upvotes,
        downvotes: downvotes
    });

    const [hideComments, setHideComments] = useState(false);

    const onToggleHideComments = () => {
        setHideComments(hideComments => !hideComments);
    }

    const onVotesButtonClick = (voteType, numVotes) => {
        setVotes({
            ...votes,
            [voteType]: ++numVotes
        })
    }

    return(
        <div>
            <iframe
                width="919"
                height="525"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
            <h1>{title}</h1>
            <p>{views} views | Uploaded {createdAt}</p>
            <Button text="👍" votes={votes.upvotes} onVotesButtonClick={onVotesButtonClick}></Button>
            <Button text="👎" votes={votes.downvotes} onVotesButtonClick={onVotesButtonClick}></Button>
            <br></br>
            <button onClick={onToggleHideComments}>{hideComments ? "Show Comments" : "Hide Comments"}</button>
            {
                hideComments ? null : <Comments comments={comments}></Comments>
            }
        </div>
    )
}

export default Video;