import "./ChatItem.css"
import Avatar from "@mui/material/Avatar";

function ChatItem(){

    let name="Yuval Shavit";
    let lastMessage="Hello";
    let lastMessageTime="10:21";

    return (
        <div className="chat-item-div">
            <div>{lastMessageTime}</div>
            <div>
                <div>{name}</div>
                <div>{lastMessage}</div>
            </div>
            <Avatar
                sx={{ height: "64px", width: "64px" }}
                alt="Profile Pic"
                src={`${process.env.PUBLIC_URL}/info-pics/yuval-image.jpg`}
            />
            
        </div>
    );
}

export {ChatItem};