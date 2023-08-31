import "./ChatInfo.css";
import Avatar from "@mui/material/Avatar";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function ChatInfo() {
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [signupOpen, setSignupOpen] = React.useState(false);

  const clickedLoginHandler = () => {
    setLoginOpen(true);
  };

  const clickedSignupHandler = () => {
    setLoginOpen(false);
    setSignupOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleSignupClose = () => {
    setSignupOpen(false);
  };

  return (
    <div className="chat-info-div">
      <div className="chat-info-options">
        <Avatar
          sx={{ height: "64px", width: "64px" }}
          alt="Profile Pic"
          src={`${process.env.PUBLIC_URL}/info-pics/log-out-logo.png`}
        />

        <Avatar
          sx={{ height: "64px", width: "64px" }}
          alt="Profile Pic"
          src={`${process.env.PUBLIC_URL}/info-pics/login-icon.png`}
          onClick={clickedLoginHandler}
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
      </div>

      <div className="profile-image">
        <Avatar
          sx={{ height: "64px", width: "64px" }}
          alt="Profile Pic"
          src={`${process.env.PUBLIC_URL}/info-pics/yuval-image.jpg`}
        />
      </div>

      <Dialog open={loginOpen} onClose={handleLoginClose}>
        <DialogTitle>Log-in</DialogTitle>
        <DialogContent>
          <DialogContentText>Please Login into your account</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="User Name"
            label="User Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="Password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
          <div style={{ marginTop: "1rem" }}>
            Have no account?
            <Button onClick={clickedSignupHandler}>Signup</Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginClose}>Cancel</Button>
          <Button onClick={handleLoginClose}>Login</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={signupOpen} onClose={handleSignupClose}>
        <DialogTitle>Sign-Up</DialogTitle>
        <DialogContent>
          <DialogContentText>Please Sigup</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="User Name"
            label="User Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="Password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="Phone"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignupClose}>Cancel</Button>
          <Button onClick={handleSignupClose}>Signup</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { ChatInfo };
