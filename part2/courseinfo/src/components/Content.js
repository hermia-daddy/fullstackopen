import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {

    const total = parts.reduce((pre, cur) => {
        return cur.exercises+pre
    },0)

    return (
        <div>
            { parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises}></Part>)}
            <p>total of {total} exercises</p>
        </div>
    )
}

export default Content