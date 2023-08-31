import "./ChatsContainer.css"
import { ChatInfo } from "../ChatInfo/ChatInfo";
import SearchBar from "../SearchBar/SearchBar"
import { ChatList } from "../ChatList/ChatList";

export default function ChatsContainer() {
    return (
    <div className="chats-container-div">
        <ChatInfo/>
        <SearchBar/>
        <ChatList/>
    </div>
    );
}