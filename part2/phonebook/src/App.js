import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newSearchWord,setSearchWord] = useState('')
    const [newSearchPersons,setNewSearchPersons] = useState([...persons])

    const exitName = (p) => p.name === newName

    const addPerson = (event) => {

        event.preventDefault()
        if (persons.some(exitName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        const newPerson = {
            name: newName,
            number: newNumber
        }
        setPersons(persons.concat(newPerson))
        if(newName.toLowerCase().indexOf(newSearchWord.toLowerCase())>-1){
            setNewSearchPersons(newSearchPersons.concat(newPerson))
        }
        setNewName('')
        setNewNumber('')
    }

    const handleOnPersonNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleOnPersonNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleSearch = (event) =>{
        setSearchWord(event.target.value)
        if(event.target.value){
         const searchPersons =   persons.filter(p=>p.name.toLowerCase().indexOf(event.target.value.toLowerCase())>-1)
         setNewSearchPersons(searchPersons)
        }else{
            setNewSearchPersons(persons)
        }
        
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter handleSearch={handleSearch} newSearchWord={newSearchWord}/>
            <h2>add a new</h2>
            <PersonForm addPerson={addPerson} handleOnPersonNameChange={handleOnPersonNameChange} handleOnPersonNumberChange={handleOnPersonNumberChange} newName={newName} newNumber={newNumber} />
            <h2>Numbers</h2>
            <Persons searchedPersons={newSearchPersons}/>
        </div>
    )
}

export default App