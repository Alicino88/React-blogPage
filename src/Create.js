import { useState } from "react";

const Create = () => {
  /*below a state variable is created to store the value of the title
  The idea is to create a state variable for all the different elements we type in*/
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  //the state variable below is to conditionally render a different button while the post is being submitted
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (e) => {
    //normally when clicking on the button, the page refreshes, by adding the below we prevent this behaviour
    e.preventDefault();
    //we create a new object below which contains the state variables we have created above
    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
    });
  };
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        {/* To make sure the input is stored in the state variable "title" I put this as value*/}
        {/* setTitle sets the actual title equal to what we are typing. This function is triggered whenever we type on this input field*/}
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Mario">Mario</option>
        </select>
        {/*when isPending is false then the button is rendered */}
        {!isPending && <button>Add blog</button>}
        {/*when isPending is true then the Adding blog button is rendered */}
        {isPending && <button disabled>Adding blog...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
