import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Blog1",
      content: "Ciao Ciao ciao ciao ciao ciao",
      author: "name",
      id: 1,
    },
    {
      title: "Blog2",
      content: "Ciao Ciao ciao ciao ciao ciao",
      author: "name",
      id: 2,
    },
    {
      title: "Blog3",
      content: "Ciao Ciao ciao ciao ciao ciao",
      author: "name",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
