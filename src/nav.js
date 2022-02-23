import "./nav.css";

function Nav() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <img id="op" src={"./logo192.png"} alt="imagenav"></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/preview">Preview</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/author">Author</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Nav;
