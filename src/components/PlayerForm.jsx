import React from 'react'

export const PlayerForm = ({
    name,
    teamId,
    position,
    setName,
    setTeamId,
    setPosition,
    handleSubmit
}) => {
    return (
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                id="name" 
                name="name" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="teamId">Team ID</label>
                <input 
                id="teamId" 
                teamId="teamId" 
                type="text" 
                value={teamId} 
                onChange={(e) => setTeamId(e.target.value)}/>

                <label htmlFor="position">Position</label>
                <input 
                id="position" 
                position="position" 
                type="text" 
                value={position} 
                onChange={(e) => setPosition(e.target.value)}/>
                
                <input 
                type="submit" 
                value="Add" 
                aria-label="Add a Player" />
            </form>
    )
}