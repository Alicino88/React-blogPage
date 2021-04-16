import { useState } from "react";

const Create = () => {
  /*below I create a state variable to store the value of the title*/
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
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
