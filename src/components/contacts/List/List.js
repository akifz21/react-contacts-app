import React, { useState } from 'react'

function List({ contacts }) {
    const [filter, setFilter] = useState('')

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filter.toLowerCase())
        })
    })

    console.log(filtered)
    return (
        <div>
            <div>
                <h2>Filter</h2>
                <input className='input' placeholder='Search..' type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
            </div>
            <h2>Contacts</h2>
            <ul>
                {filtered.map((contacts, key) => (
                    <li key={key}>{contacts.name} ,{contacts.phone_number}</li>
                )
                )}
            </ul>
            <h3>Total Contacts : {filtered.length}</h3>
        </div>
    )
}

export default List
