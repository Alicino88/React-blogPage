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

  /*The function below deletes the blogs when clicking on the button
  it doesn't change the original data but it returns a new array*/
  const handleDelete = (id) => {
    /*the new array includes all the blog posts whose id is different from the one of the post we have clicked on the delete button*/
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    /*we set the state so that React triggers the re-render of the template displaying all the blog posts but the one which has been deleted*/
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      {/*below we are outputting all the blogs*/}
      {blogs.map((blog) => (
        <BlogList
          id={blog.id}
          title={blog.title}
          author={blog.author}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Home;
