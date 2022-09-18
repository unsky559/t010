import React from 'react';
import { IPost } from '../types/IPost';
import Post from './post';

type propType = {
    posts: IPost[],
    limit?: number
}

const PostList = (props: propType) => {
  const copy = [...props.posts];
  copy.splice(props.limit);
  const postList = props.limit ? copy : props.posts;
  return (
        <>
            {postList.map((pst) => <Post post={pst}/>)}
        </>
  );
};

export default PostList;
