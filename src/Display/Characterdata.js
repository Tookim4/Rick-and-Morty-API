import React from 'react'

const Characterdata = ({actor}) => {
    return (
    <figure class="imghvr-zoom-out card">
        <img className='image' src={actor.image} alt=''/>
            <figcaption className='card-content' style={{backgroundColor:'#31b2d6'}}>
                <h1 className='ih-fade-down ih-delay-sm'>{actor.name}</h1>
                        <ul className='list-details'>
                        <li><strong>Gender:</strong>{actor.gender}</li>
                        <li><strong>Species:</strong>{actor.species}</li>
                        <li><strong>Status:</strong>{actor.status}</li>
                        <li><strong>Location:</strong>{actor.location.name}</li>
                        </ul>
            </figcaption>
    </figure>
    )
}

export default Characterdata
