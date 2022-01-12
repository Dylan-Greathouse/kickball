import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TeamForm } from '../../components/TeamForm'
import { updateTeamById } from '../../services/utils/teams'

export const UpdateTeam = ({ match }) => {
    const { id } = match.params
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await updateTeamById(id,{ name, city, state  })
        history.push(`/teams/${res[0].id}`)
    }

    return (
        <>
        <fieldset>
        <legend>Edit Team</legend>
           <TeamForm 
            name = {name}
            city = {city}
            state = {state}
            handleSubmit = {handleSubmit}
            setName = {setName}
            setCity = {setCity}
            setState = {setState}
           />
        </fieldset>
        </>
    )
}