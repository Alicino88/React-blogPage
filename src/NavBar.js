function NavBar() {
  return (
    <nav className="navbar">
      <h1>The blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
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
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
