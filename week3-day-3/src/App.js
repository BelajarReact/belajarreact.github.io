import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import { Home, Categories, About, Contact } from "./views";
export default function App() {
  return (
    <div className="App">
      <h1>Hello ini adalah Tugas Week-3 day-3</h1>
      <h2>Tentang React Router Dom</h2>
      <p>hadie87@gmail.com</p>
      <Router>
        <nav className="navbar navbar-expand-sm justify-content-center navbar-light bg-light">
          <div className="navbar-collapse">
            <ul className="navbar-nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Beranda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Tentang
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  Kategori
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
