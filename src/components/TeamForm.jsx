import React from 'react'

export const TeamForm = ({ 
    name, 
    city, 
    state, 
    handleSubmit, 
    setName, 
    setCity, 
    setState, }) => {
    return (  
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
            id="name" 
            name="name" 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}/>
    
            <label htmlFor="city">City</label>
            <input 
            id="city" 
            city="city" 
            type="text" 
            value={city} 
            onChange={(e) => setCity(e.target.value)}/>

            <label htmlFor="state">State</label>
            <input 
            id="state" 
            state="state" 
            type="text" 
            value={state} 
            onChange={(e) => setState(e.target.value)}/>

            <input 
            type="submit" 
            value="Add" 
            aria-label="Add a Team" />
        </form>)
        
}