import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./NewMessage.css"

export default function NewMesage() {
  return (
    <div className='new-message-div'>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: "80%" },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField label="New Message" variant="outlined" />
        </Box>
    </div>
  );
}