import React, { useEffect, useState } from 'react'

function Form({ addContact, contacts }) {

    const [form, setForm] = useState({ name: "", phone_number: "" })


    useEffect(() => {
        setForm({ name: "", phone_number: "" })
    }, [contacts])


    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addContact([...contacts, form])


    }

    return (
        <div>
            
            <form onSubmit={onSubmit}>
                <h2>Add Contact</h2>
                <div>
                    <input className='input'
                        type="text"
                        name="name"
                        placeholder='Name'
                        value={form.name}
                        required={true}
                        onChange={onChangeInput} />
                </div>
                <div>
                    <input className='input'
                        type="text"
                        value={form.phone_number}
                        name='phone_number'
                        placeholder='Phone Number'
                        onChange={onChangeInput} />
                </div>
                <div className='btn'><button type='submit' >Add</button></div>

            </form>
        </div>

    )
}

export default Form
