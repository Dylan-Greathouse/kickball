import React from 'react'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { deleteTeamById, getTeams } from '../../services/utils/teams';

export const TeamList = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] =useState(true);
 
    const loadTeams = async () => {
        const res = await getTeams();
        setTeams(res);
        setLoading(false);
    };

    useEffect(() => {loadTeams()},[])

    const handleDelete = async ({id, name}) => {
        const shouldDelete = window.confirm(`Are you sure you want to delete the ${name} from the roster?`)
        
        if (shouldDelete) 
        await deleteTeamById(id)
        await loadTeams()
    }
    
    if (loading) return <p className='loading'>Loading Teams...🌈</p>

    return (
        <div className='TeamList'>
            <h1>Teams</h1>
            <Link to='/teams/new' className='Toplink'><h3>Add a Team</h3> </Link>
            <ul className='teams'>
                {teams.map((team) => (
                    <li key={team.id}>

                        <Link className='link' to={`/teams/${team.id}`}>
                            <li>{team.name}</li>
                        </Link>

                        <Link className='link' to={`teams/${team.id}/update`}>
                            <button className='teamBtn'>Edit</button>
                        </Link>
                                        
                        <button 
                        className='teamBtn'
                        type="button" 
                        aria-label={`Delete ${team.name}`}
                        onClick={() => handleDelete({ id: team.id, name: team.name })}>
                        Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}