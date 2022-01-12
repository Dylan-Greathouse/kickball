import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { PlayerForm } from '../../components/PlayerForm'
import { updatePlayerById } from '../../services/utils/players'


export const UpdatePlayer = ({ match }) => {
    const { id } = match.params
    const [name, setName] = useState('')
    const [teamId, setTeamId] = useState('')
    const [position, setPosition] = useState('')
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await updatePlayerById(id,{ name, teamId, position  })
        history.push(`/players/${res[0].id}`)
    }
    return (
        <>
        <fieldset>
        <legend>Edit Player</legend>
          <PlayerForm
           name={name}
           teamId={teamId}
           position={position}
           setName={setName}
           setTeamId={setTeamId}
           setPosition={setPosition}
           handleSubmit={handleSubmit}
           />
        </fieldset>
        </>
    )
}