import React from "react"
import Link from "gatsby-link"
import { UlList } from "./StyledComponents"

const Menu = () => (
  <nav
    style={{
      background: "rgba(0, 0, 0, .8)",
    }}
  >
    <UlList>
      <li>
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/about">
          About
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/contact">
          Contact
        </Link>
      </li>
    </UlList>
  </nav>
)

export default Menu
