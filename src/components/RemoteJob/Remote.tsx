import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import s from './Remote.module.css'

export const Remote = () => {
    return (
        <div className={s.remote}>
            <div>
                <h1>Investigating options for remote work</h1>
            </div>
            <BasicButtons/>
        </div>
    );
};


function BasicButtons() {
    return (
        <Stack spacing={2} direction="row" className={s.remoteBtn}>
            <Button variant="outlined">Outlined</Button>
        </Stack>
    );
}