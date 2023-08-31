import "./MessagesContainer.css"
import {ChatName} from "../ChatName/ChatName"
import { MessageList } from "../MessagesList/MessagesList";
import NewMessage from "../NewMessage/NewMessage"

export default function MessagesContainer () {
    return (
    <div className="messages-container-div">
        <ChatName/>
        <MessageList/>
        <NewMessage/>
    </div>);
}