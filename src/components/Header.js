import React from "react";
import { Link } from "react-router-dom";
import characters1 from ".././images/characters1.jpg";
import quotes1 from ".././images/quotes1.png";
import "../App.css";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img alt="characters" src={characters1} width={15} /> Characters
          </Link>
        </li>
        <li>
          <Link to="/quotes">
            <img alt="quotes" src={quotes1} width={20} /> Quotes
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
