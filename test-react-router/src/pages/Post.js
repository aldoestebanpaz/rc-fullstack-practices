import React from 'react';
import { useParams } from 'react-router-dom';

function Post(props) {
  const params = useParams();
  const postId = params.id;
  return (
    <div>Post ID: {postId}</div>
  );
}

export default Post;
