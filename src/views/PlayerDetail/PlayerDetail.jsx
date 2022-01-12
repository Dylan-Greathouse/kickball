import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { getPlayerById } from "../../services/utils/players"

export const PlayerDetail = ({name, teams, team_id}) => {
    const { id } = useParams()
    const [player, setPlayer] = useState(null)
    const [loading, setLoading] = useState(true);

   
    useEffect(() => {
        getPlayerById(id)
        .then((res) => setPlayer(res))
        .finally(() => setLoading(false));
        }, [id])

    if (loading) return <h2>Loading...</h2>

    return (
        <div>
            <h1>{name}</h1>
            <Link className='link' to={`/teams/${team_id}`}>
            <h2>{teams.name}</h2>
            </Link>
            <h3>{player.teams.city} {player.teams.state}</h3>        
            <h3>{player.position}</h3>
          
        </div>
    )
}
