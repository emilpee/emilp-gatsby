import React from "react"
import Link from "gatsby-link"

const Menu = () => (
  <nav
    style={{
      background: "#222",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
        textDecoration: "none",
        alignItems: "center",
        padding: ".75rem",
        margin: 0,
      }}
    >
      <li>
        <Link style={{ textDecoration: "none" }} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none" }} to="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Menu
