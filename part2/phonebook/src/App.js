import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import servicePerson from './service/Persons'
import Notification from './components/Notification'


const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newSearchWord, setSearchWord] = useState('')
    const [newSearchPersons, setNewSearchPersons] = useState([])
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        servicePerson.getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
                setNewSearchPersons(initialPersons)
            })
    }, [])


    const addPerson = (event) => {

        event.preventDefault()

        const newPerson = {
            name: newName,
            number: newNumber
        }

        servicePerson.create(newPerson)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                if (newName.toLowerCase().indexOf(newSearchWord.toLowerCase()) > -1) {
                    setNewSearchPersons(newSearchPersons.concat(returnedPerson))
                }
                setMessage(`add ${newName}`)
                setTimeout(() => {
                    setMessage(null)
                }, 5000)
                setNewName('')
                setNewNumber('')
            })
            .catch(error => {
                console.log('error:', error.response)
                setError(error.response.data.error)
                setTimeout(() => {
                    setError(null)
                }, 5000)
                setNewName('')
                setNewNumber('')
            })

    }

    const handleOnPersonNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleOnPersonNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleSearch = (event) => {
        setSearchWord(event.target.value)
        if (event.target.value) {
            const searchPersons = persons.filter(p => p.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
            setNewSearchPersons(searchPersons)
        } else {
            setNewSearchPersons(persons)
        }
    }

    const deletePerson = (id) => {
        var deletePerson = persons.find(p => p.id === id)
        if (window.confirm(`delete ${deletePerson.name} ?`)) {
            servicePerson.remove(id)
                .then(() => {
                    setPersons(persons.filter(p => p.id !== id))
                    setNewSearchPersons(newSearchPersons.filter(p => p.id !== id))
                })
                .catch(error => {
                    const deletedPerson = persons.find(p => p.id === id)
                    setPersons(persons.filter(p => p.id !== id))
                    setNewSearchPersons(newSearchPersons.filter(p => p.id !== id))
                    console.log('error:', error.response)
                    setError(`Information of ${deletedPerson.name} has already been removed from server`)
                    setTimeout(() => {
                        setError(null)
                    }, 5000)
                })
        }
    }

    return (

        <div>
            <h2>Phonebook</h2>
            <Notification message={message} error={error} />
            <Filter handleSearch={handleSearch} newSearchWord={newSearchWord} />
            <h2>add a new</h2>
            <PersonForm addPerson={addPerson} handleOnPersonNameChange={handleOnPersonNameChange} handleOnPersonNumberChange={handleOnPersonNumberChange} newName={newName} newNumber={newNumber} />
            <h2>Numbers</h2>
            <div>
                {newSearchPersons.map((person) => <Person key={person.id} person={person} deletePerson={() => deletePerson(person.id)} />)}
            </div>
        </div>
    )
}

export default App