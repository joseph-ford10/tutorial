import React from 'react'

const NavList = () => {
  return (
    <ul>
      <li>
        <h2 className="listMainHead">Home</h2>
        <h2 className="listMainHead">Tutorials</h2>
        <ul>
          <h3 className="listSubHead">Overlaps</h3>
          <ul>Overlaps 1: Square Brackets</ul>
          <ul>Overlaps 2: Positioning</ul>
          <ul>Overlaps 3: Connecting Lines</ul>
        </ul>
      </li>
    </ul>
  )
}

export default NavList
