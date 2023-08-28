import "./ChatInfo.css";
import Avatar from "@mui/material/Avatar";

function ChatInfo() {
  return (
    <div className="chat-info-div">
      <Avatar
        sx={{ height: "64px", width: "64px" }}
        alt="Profile Pic"
        src={`${process.env.PUBLIC_URL}/info-pics/log-out-logo.png`}
      />
      <Avatar
        sx={{ height: "64px", width: "64px" }}
        alt="Profile Pic"
        src={`${process.env.PUBLIC_URL}/info-pics/new-message.svg`}
      />
      <Avatar
        sx={{ height: "64px", width: "64px" }}
        alt="Profile Pic"
        src={`${process.env.PUBLIC_URL}/info-pics/new-group.jpg`}
      />
      <Avatar
        sx={{ height: "64px", width: "64px" }}
        alt="Profile Pic"
        src={`${process.env.PUBLIC_URL}/info-pics/yuval-image.jpg`}
      />
    </div>
  );
}

export { ChatInfo };
