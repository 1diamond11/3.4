import React from 'react';

type Comment = {
  id: number;
  name: string;
  body: string;
};

type CommentListProps = {
  comments: Comment[];
};

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <strong>{comment.name}:</strong> {comment.body}
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
