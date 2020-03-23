import React from "react"
import Link from "gatsby-link"
import { UlList } from "./StyledComponents"

const Menu = () => (
  <nav
    style={{
      background: "#222",
    }}
  >
    <UlList>
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
      <li>
        <Link style={{ textDecoration: "none" }} to="/contact">
          Contact
        </Link>
      </li>
    </UlList>
  </nav>
)

export default Menu
