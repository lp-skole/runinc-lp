import React from 'react'
import Nav from './Nav/Nav'
import SearchBar from './SearchBar/SearchBar'
import './header.scss'
import Logo from '../../../gfx/runinc_logo.svg'
import LogoHover from '../../../gfx/runinc_logo_hover.svg'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo}
        onMouseEnter={e => (e.currentTarget.src = LogoHover)} 
        onMouseLeave={e => (e.currentTarget.src = Logo)} alt="Logo"/>
      </div>
      <Nav/>
      <SearchBar/>
    </header>
  )
}

export default Header
