import React from "react";
import "./FeedItem.css";

export const FeedItem = (props) => {
    if (props.postType == "tweet") {
        return (
            <div className="feed-item-wrapper">
                <p>
                    <i class="fas fa-heart"></i>
                    {props.message}
                </p>
            </div>
        );
    } else {
        return (
            <div className="feed-item-wrapper">
                <p>
                    <i class="fas fa-heart"> </i>
                    <strong>{props.from} </strong>
                    sent strongs to
                    <strong className="text-red"> {props.to}</strong>
                </p>
            </div>
        );
    }
};

export default FeedItem;
