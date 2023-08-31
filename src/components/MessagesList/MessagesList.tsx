import "./MessagesList.css"
import {MessageItem} from "../MessageItem/MessageItem"

function MessageList (){
    const messageItems=["Hello", "Out", "There"];
    return (
        <div className="message-list">
           
                {messageItems.map(element => {
                    return <MessageItem/>
                    })
                }
    
        </div>
    );
}

export {MessageList};