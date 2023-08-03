import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const[text, setText] = useState('')

    const onWrite = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className='search'>
            <form>
                <input
                type='text'
                // className='form-control'
                placeholder='Search Library'
                value={text}
                onChange={(e)=>onWrite(e.target.value)}    
                />
            </form>
        </section>
    )
}

export default Search
