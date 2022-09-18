import React, { useState } from 'react';
import {
  Button, Stack, TextField,
} from '@mui/material';
import { IPost } from '../types/IPost';

type propType = {
    submitPost: (post: IPost) => void
}

const PostForm = (props: propType) => {
  const [name, updateName] = useState('');
  const [avatar, updateAvatar] = useState('');
  const [text, updateText] = useState('');

  const handleSubmit = () => {
    props.submitPost({
      name,
      avatarURL: avatar,
      text,
    });
  };

  return (
        <div>
            <Stack>
                <TextField onChange={(e) => updateName(e.target.value)}fullWidth margin="normal" label="Name" variant="standard" />
                <TextField onChange={(e) => updateAvatar(e.target.value)}fullWidth margin="normal" label="AvatarURL" variant="standard" />
                <TextField onChange={(e) => updateText(e.target.value)}fullWidth margin="normal" label="PostText" variant="outlined" />
                <Button disabled={!name || !text} onClick={handleSubmit} variant="contained">
                    Post
                </Button>
            </Stack>
        </div>
  );
};

export default PostForm;
