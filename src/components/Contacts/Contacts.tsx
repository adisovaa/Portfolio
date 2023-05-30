import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import s from './Contacts.module.css'

export default function Contacts() {
    return (
        <div className={s.contacts}>
            <Box className={s.contact}
                // sx={{
                //     display: 'flex',
                //     alignItems: 'center',
                //     '& > :not(style)': {m: 1},
                // }}
            >
                <TextField
                    className={s.textFiled}
                    helperText="Please enter your name"
                    id="demo-helper-text-aligned"
                    label="Name"
                />
                <TextField
                    className={s.textFiled}
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Email"
                />
                <TextField
                    className={s.textFiledText}
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Text"
                />
            </Box>
            <Stack spacing={2} direction="row" className={s.contactBtn}>
                <Button variant="outlined">Send</Button>
            </Stack>
        </div>
    );
}