import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Link } from 'react-router-dom'

import Circle from './Circle'

const NavList = ({ unitNum }) => {
  const titles = [
    'Overlaps 1: Square Brackets',
    'Overlaps 2: Positioning',
    'Overlaps 3: Connecting Lines',
    'Overlaps 4: Taking the Floor',
  ]

  return (
    <ul className="navList">
      <li className="mainList">
        <h1 className="listMainHead">Tutorials</h1>
        <ul>
          <h3 className="listSubHead">Overlaps</h3>
          {titles.map((item, index) => (
            <Link
              to={`/overlap${index + 1}`}
              style={{
                fontWeight: index + 1 === unitNum ? 'bold' : '',
              }}
            >
              <li
                className={`overlap${index + 1}List navListItem ${
                  index === 0 ? 'topItem' : ''
                }`}
                // style={{
                //   backgroundColor:
                //     index + 1 === unitNum ? 'lightgrey' : 'white',
                // }}
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default NavList
