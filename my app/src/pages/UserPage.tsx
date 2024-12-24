import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentList from '../components/CommentList';

type Comment = {
  id: number;
  name: string;
  body: string;
  postId: number;
};

const UserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((response) => {
      const userComments = response.data.filter(
        (comment: Comment) => comment.postId === parseInt(id || '0')
      );
      setComments(userComments);
    });
  }, [id]);

  return (
    <div>
      <h1>Comments for User {id}</h1>
      <CommentList comments={comments} />
    </div>
  );
};

export default UserPage;
