import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createTeam } from '../../services/utils/teams'
import { TeamForm } from '../../components/TeamForm'

export const CreateTeam = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()

       const res = await createTeam({ name, city, state })
       history.push(`/teams/${res[0].id}`) 
    }

    return (
        <>
        <fieldset>
        <legend>Add a Team</legend>
           <TeamForm 
            name={name}
            city={city}
            state={state}
            handleSubmit={handleSubmit}
            setName={setName}
            setCity={setCity}
            setState={setState}
           />
        </fieldset>
        </>
    )
}