import { useState, useEffect } from "react";

/*Custom hooks need to start with "use" */

const useFetch = (url) => {
  const [data, setData] = useState(null);
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
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        console.log(res);
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
        setData(data);
        /*once the blogs are set as the current state, and therefore are being shown in the browser,
        we change isPending to false so that the loading message is not shown anymore*/
        setIsPending(false);
        setIsError(null);
      })
      /*below will catch the network errors, for example if we cannot connect to the server*/
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setIsPending(false);
          setIsError(err.message);
        }
      });
    /*the below aborts the fetch for the home component*/

    return () => abortCont.abort();
    /*we add url as a dependency so that when the url changes the useEffect
      function is being run*/
  }, [url]);

  return { data, isPending, isError };
};

export default useFetch;
