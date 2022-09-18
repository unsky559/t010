import React from 'react';
import {
  Avatar, Card, CardContent, CardHeader, Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { IPost } from '../types/IPost';

type propType = {
    post: IPost
}

const Post = (props: propType) => (
        <Card style={{ marginBottom: 25 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.post.avatarURL}>
                        {props.post.name[0].toUpperCase()}
                    </Avatar>
                }
                title={props.post.name}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.post.text}
                </Typography>
            </CardContent>
        </Card>
);

export default Post;
