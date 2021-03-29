import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Blog1",
      content: "Ciao Ciao ciao ciao ciao ciao",
      author: "alice",
      id: 1,
    },
    {
      title: "Blog2",
      content: "Ciao Ciao ciao ciao ciao ciao",
      author: "mario",
      id: 2,
    },
    {
      title: "Blog3",
      content: "Ciao Ciao ciao ciao ciao ciao",
      author: "mario",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {/*below we are outputting all the blogs*/}
      {blogs.map((blog) => (
        <BlogList id={blog.id} title={blog.title} author={blog.author} />
      ))}
      {/*below we are outputting only the blogs with the author Alice. Note that after filtering through the array,
       you still need to appply the map method to display the blogs*/}
      {blogs
        .filter((blog) => blog.author === "alice")
        .map((blog) => (
          <BlogList id={blog.id} title={blog.title} author={blog.author} />
        ))}
    </div>
  );
};

export default Home;
