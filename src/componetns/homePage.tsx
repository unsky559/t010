import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import PostForm from './postForm';
import { IPost } from '../types/IPost';
import PostList from './postList';

const HomePage = () => {
  const [posts, updatePosts] = useState([]);

  const submitPost = (post: IPost) => {
    updatePosts([post, ...posts]);
  };

  return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <PostForm submitPost={submitPost}/>
                    <Typography variant="h4" component="h2">
                        Total posts: {posts.length}
                    </Typography>
                    <PostList posts={posts}/>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant="h4" component="h2">
                        Last 5 posts
                    </Typography>
                    <PostList posts={posts} limit={5}/>
                </Grid>
            </Grid>
        </Container>
  );
};

export default HomePage;
