import React from 'react'
import { Link } from 'react-router-dom'
import './scss/_nav.scss'
import { NavFunction } from './NavFunction'

const Nav = () => {
    const {
        navList
    } = NavFunction()

    return (
        <nav className='nav'>
            <div className='nav__list'>
                {Object.values(navList).map((item, index) => (
                    <Link to={item.link} key={index}>{item.name}</Link>
                ))}
            </div>
        </nav>
    )
}

export default Nav