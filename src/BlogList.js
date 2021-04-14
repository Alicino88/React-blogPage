import { Link } from "react-router-dom";

const BlogList = (props, handleDelete) => {
  return (
    <div className="blog-list">
      <div className="blog-preview" key={props.id}>
        {/*template string to output variables which starts with $*/}
        <Link to={`/blogs/${props.id}`}>
          <h2>{props.title}</h2>
          <p>Written by {props.author}</p>
        </Link>

        {/*we wrap the function inside an anonymous one so to be able to pass 
        an argument, otherwise the function would fire immediately
        handleDelete is a function which is passed as a prop
        <button onClick={() => handleDelete(props.id)}>Delete blog </button>*/}
      </div>
    </div>
  );
};

export default BlogList;
