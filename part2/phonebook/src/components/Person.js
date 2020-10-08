import React from 'react'

const Person = ({ person, deletePerson }) => {
    console.log('delete person method', deletePerson)
    return (
        <p key={person.name}>{person.name} {person.number} <button onClick={deletePerson}>delete</button></p>
    )
}

export default Person