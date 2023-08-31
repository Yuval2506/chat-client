import "./MessageItem.css"
import Avatar from "@mui/material/Avatar";

function MessageItem (){

    let sentFrom="Yuval Shavit";
    let content="Hello";
    let timeSent="10:21";

    return (
        <div className="message-item-div">
            <div>{sentFrom}</div>
            <div className="inside-message-item-div">
                <div>{timeSent}</div>
                <div>{content}</div>
            </div>
        </div>
    );
}

export {MessageItem};