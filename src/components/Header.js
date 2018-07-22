import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/settings">Settings</Link>
    </ul>
  </header>
)

export default Header
