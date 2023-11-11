import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <nav>
      <h1>GD</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#contact"}>Contact</HashLink>
        {/* <hashLnk to='/#About'></hashLnk>
        <hashLink to='/#Contact'></hashLink> */}
      </main>
    </nav>
  )
}

export default Header
