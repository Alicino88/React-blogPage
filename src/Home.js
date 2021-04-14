import BlogList from "./BlogList";
import useFetch from "./UseFetch.js";

const Home = () => {
  const { data, isPending, isError } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {/*below we are outputting all the blogs
      we need to use logical && as otherwise we would get an error saying that
      blogs is null. At the very beginning blog is null so we need to wait until
      the value is not null to map the array and render the blog posts.
      How it works is that it checks what is on the left of the && and if
      that is true then it will bother executing the rest of the code
      null is equal to false so the map function wont run until the
      actual blogs are fetched. It is called conditional templating */}
      {/*below we show a message while the blogs are being fetched*/}
      {isError && <div>{isError}</div>}
      {isPending && <div>Loading posts...</div>}
      {data &&
        data.map((data) => (
          <BlogList id={data.id} title={data.title} author={data.author} />
        ))}
    </div>
  );
};

export default Home;
