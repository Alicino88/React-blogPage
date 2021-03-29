const BlogList = ({ id, title, author }) => {
  return (
    <div className="blog-list">
      <div className="blog-preview" key={id}>
        <h2>{title}</h2>
        <p>Written by {author}</p>
      </div>
    </div>
  );
};

export default BlogList;
