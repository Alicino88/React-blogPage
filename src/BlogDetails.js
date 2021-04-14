import { useParams } from "react-router";

const BlogDetails = () => {
  /*useParams allows to grab route parameters from the route*/
  const { id } = useParams();
  return (
    <div className="blog-details">
      <h2>Blog details - {id}</h2>
    </div>
  );
};

export default BlogDetails;
