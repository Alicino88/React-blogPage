import { useState } from "react";

const Create = () => {
  /*below a state variable is created to store the value of the title
  The idea is to create a state variable for all the different elements we type in*/
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  const handleSubmit = (e) => {
    //normally when you click on the button the page refresh, by adding the below we prevent this behaviour
    e.preventDefault();
    //we create a new object below which contains the state variables we have created above
    const blog = { title, body, author };
    console.log(blog);
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
        <button>Add blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
