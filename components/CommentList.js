import Comment from './Comment'

export default ({ comments }) => (
  <>
    {comments.map(c => (
      <Comment key={c.id} comment={c} />
    ))}
  </>
);
