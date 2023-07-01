import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Link } from 'react-router-dom'

const NavList = () => {
  return (
    <ul>
      <li className="mainList">
        <h1 className="listMainHead">Tutorials</h1>
        <ul>
          <h3 className="listSubHead">Overlaps</h3>
          <ul>
            <Link to="/overlap1">Overlaps 1: Square Brackets</Link>
          </ul>
          <ul>
            <Link to="/overlap2">Overlaps 2: Positioning</Link>
          </ul>
          <ul>
            <Link to="/overlap3">Overlaps 3: Connecting Lines</Link>
          </ul>
          <ul>
            <Link to="/overlap4">Overlaps 4: Taking the Floor</Link>
          </ul>
        </ul>
      </li>
    </ul>
  )
}

export default NavList
