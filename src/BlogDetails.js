import { useParams } from "react-router";
import useFetch from "./UseFetch";

const BlogDetails = () => {
  /*useParams allows to grab route parameters from the route
  The name must be the same here in the hook and on the router (id) in the App component*/
  const { id } = useParams();
  /* Below I fetch the data using the id parameter. Data are fetched only for the blog post I have clicked on*/
  const { data: blog, isPending, isError } = useFetch(
    " http://localhost:8000/blogs/" + id
  );
  return (
    <div className="blog-details">
      {isPending && <div>Loading... </div>}
      {isError && <div>{isError}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.content}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
