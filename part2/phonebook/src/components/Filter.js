import React from 'react'

const Filter = ({handleSearch,newSearchWord}) => {
    return (
        <div>
            filter shown with<input onChange={handleSearch} value={newSearchWord}></input>
        </div>
    )
}

export default Filter