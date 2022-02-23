import Home from "./home";
import Nav from "./nav";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import Preview from './preview';
import GoogleMaps from './author';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/preview" exact element={<Preview />} />
        <Route path="/author" exact element={<GoogleMaps />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
