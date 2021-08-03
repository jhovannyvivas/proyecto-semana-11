
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css';
import { Footer } from "./components/footer/footer";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <Link to="/titulo"><h1>Dirección</h1></Link>
        <Switch>
          <Route path="/titulo">
            <Footer />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>

    </Router>

  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
