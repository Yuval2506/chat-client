import "./ChatName.css";
import Avatar from "@mui/material/Avatar";
import SearchBar from "../SearchBar/SearchBar";

function ChatName() {
  return (
    <div className="chat-message-div">
      <SearchBar />
      Yuval Shavit
      <Avatar
        sx={{ height: "64px", width: "64px" }}
        alt="Profile Pic"
        src={`${process.env.PUBLIC_URL}/info-pics/yuval-image.jpg`}
      />
    </div>
  );
}

export { ChatName };
