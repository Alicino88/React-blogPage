import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  /*The function below deletes the blogs when clicking on the button
  it doesn't change the original data but it returns a new array
  const handleDelete = (id) => {
    the new array includes all the blog posts whose id is different from the one of the post we have clicked on the delete button
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    we set the state so that React triggers the re-render of the template displaying all the blog posts but the one which has been deleted
    setBlogs(newBlogs);
  };*/

  useEffect(() => {
    fetch(" http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);
  return (
    <div className="home">
      {/*below we are outputting all the blogs
      we need to use logical && as otherwise we would get an error saying that
      blogs is null. At the very beginning blog is null so we need to wait until
      the value is not null to map the array and render the blog posts.
      How it works is that it checks what is on the left of the && and if
      that is true then it will bother executing the rest of the code
      null is equal to false so the map function wont run until the
      actual blogs are fetched. */}
      {blogs &&
        blogs.map((blog) => (
          <BlogList id={blog.id} title={blog.title} author={blog.author} />
        ))}
    </div>
  );
};

export default Home;
