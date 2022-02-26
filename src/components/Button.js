import React from "react";

const Button = ({text, votes, onVotesButtonClick}) => {
    const handleVotesButtonClick = () => {
        let voteType;
        if(text === "👍"){
            voteType = "upvotes"
        }
        else{
            voteType = "downvotes"
        }
        onVotesButtonClick(voteType, votes);
    }

    return(
        <button onClick={() => handleVotesButtonClick()}>{votes}{text}</button>
    )
}

export default Button;