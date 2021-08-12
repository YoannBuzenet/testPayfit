const Post = ({ post }) => {
  return (
    <div>
      <p>title {post.title}</p>
      <p>body {post.body}</p>
    </div>
  );
};

export default Post;
