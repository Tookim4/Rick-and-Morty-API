import React from 'react'

const Characterdata = ({actor}) => {
    return (
        < div className='card'>
            <img src={actor.image} alt=''/>
                <div className='back-card'>
                    <h1>{actor.name}</h1>
                    <ul className='list-details'>
                      <li><strong>Gender:</strong>{actor.gender}</li>
                      <li><strong>Species:</strong>{actor.species}</li>
                      <li><strong>Status:</strong>{actor.status}</li>
                      <li><strong>Location:</strong>{actor.location.name}</li>
                    </ul>
                </div>            
        </div>
    )
}

export default Characterdata
