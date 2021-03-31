import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  /*below we store error message to show it in the browser*/
  const [isError, setIsError] = useState(null);

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
        /*below we detect errors in case we get a response which is empty
          or has some other error*/
        if (!res.ok) {
          /*the error we throw here is catched below*/
          throw Error("Could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        /*once the blogs are set as the current state, and therefore are being shown in the browser,
        we change isPending to false so that the loading message is not shown anymore*/
        setIsPending(false);
        setIsError(null);
      })
      /*below will catch the network errors, for example if we cannot connect to the server*/
      .catch((err) => {
        setIsPending(false);
        setIsError(err.message);
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
      {/*below we show a message while the blogs are being fetched*/}
      {isError && <div>{isError}</div>}
      {isPending && <div>Loading posts...</div>}
      {blogs &&
        blogs.map((blog) => (
          <BlogList id={blog.id} title={blog.title} author={blog.author} />
        ))}
    </div>
  );
};

export default Home;
