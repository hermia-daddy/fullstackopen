import React from 'react'
const PersonForm = ({addPerson,handleOnPersonNameChange,handleOnPersonNumberChange,newName,newNumber}) => {
    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name:<input onChange={handleOnPersonNameChange} value={newName} />
                </div>
                <div>
                    number:<input onChange={handleOnPersonNumberChange} value={newNumber} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm