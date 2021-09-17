import React from 'react'

const Filter = (props) => {
    return (
        <p>Filter
        <input value={props.filter} onChange={props.handleFilterChange} />
      </p>
    )
}

export default Filter