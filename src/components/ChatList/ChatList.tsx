import "./ChatList.css"
import {ChatItem} from "../ChatItem/ChatItem"

function ChatList (){
    const chatItems=["Yuval", "Shavit", "Chat"];
    return (
        <div>
            <span className="chat-list-div">
                {chatItems.map(element => {
                    return <ChatItem/>
                    })
                }
        </span>
        </div>
    );
}

export {ChatList};