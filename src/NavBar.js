import { Link } from "react-router-dom";
/*when we use link instead of a classic a link, react router prevents
from sending a request to the server and the browsers handles showing
the right component according to the url path*/
function NavBar() {
  return (
    <nav className="navbar">
      <h1>The blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          /*Inline styling with key-value pairs: 
          inner brackets represent the js object and the outher the dynamic value
          note. The value is always a string and minus sign cannot be used, instead camelcase*/
          style={{
            color: "white",
            backgroundColor: "#CC5803",
            borderRadius: "8px",
          }}
        >
          Write blog
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
