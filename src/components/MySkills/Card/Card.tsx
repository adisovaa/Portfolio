import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {v1} from "uuid";
import s from './Card.module.css'


export type PropsType = {
    id: string
    name: string
    description: string
    img: string
}
export default function ActionAreaCard() {

    const data: PropsType[] = [
        {
            id: v1(),
            name: 'JS',
            description: 'lorem',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'
        },
        {
            id: v1(),
            name: 'TS',
            description: 'lorem2',
            img: 'https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png'
        },
        {
            id: v1(),
            name: 'React.JS',
            description: 'lorem3',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
        },
    ]

    return (
        <div className={s.cards}>
            {
                data.map((el, index) => {
                    return (
                        <Card key={index} className={s.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={el.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {el.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {el.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })
            }
        </div>
    );
}