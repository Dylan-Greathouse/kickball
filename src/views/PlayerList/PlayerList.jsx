import React from 'react'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { deletePlayerById, getPlayers } from "../../services/utils/players"


export const PlayerList = () => {
    const [players, setPlayers] = useState([])
    const [loading, setLoading] =useState(true)

    const loadPlayer = async () => {
        const res = await getPlayers()
        setPlayers(res)
        setLoading(false)
    }

    useEffect(() => {loadPlayer()},[])

    const handleDelete = async ({id, name}) => {
        const shouldDelete = window.confirm(`Are you sure you want to delete ${name} from the roster?`)

        if(shouldDelete) 
        await deletePlayerById(id)
        await loadPlayer()
    }

    if (loading) return <p className='loading'>Loading Players...🌈</p>

    return (
        <div className="Playerlist">
              <h1>Players</h1>
              <Link to='/players/new' className='Toplink'>Add a New Player</Link>
              <ul>
                {players.map((player) => (
                    <li key={player.id}>

                    <Link className='link' to={`/players/${player.id}`}>
                        <li>{player.name}</li>
                    </Link>

                    <Link className='link' to={`players/${player.id}/update`}>
                        <button>Edit</button>
                    </Link>
                 
                    <button type="button" onClick={() => handleDelete({ id: player.id, name: player.name })}>Delete</button>
                </li>
                ))}
                </ul>
        </div>
    )
}