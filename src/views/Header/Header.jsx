import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <div>
            <ul className='Nav'>
                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/teamlist">
                    <li>Teams</li>
                </Link>

                <Link to="/playerlist">
                    <li >Players</li>
                </Link>
            </ul>
        </div>
    )
}