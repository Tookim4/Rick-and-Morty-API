import React from 'react'

const Characterdata = ({actor}) => {
    return (
    <figure className="imghvr-zoom-out card">
        <img className='image' src={actor.image} alt=''/>
            <figcaption className='card-content' style={{backgroundColor:'#374259'}}>
                <h1 style={{margin:'0', color: '#F2D8D8',fontSize:'2em'}} className='ih-fade-down ih-delay-sm'>{actor.name}</h1>
                        <ul className='list-details'>
                        <li><strong>Gender: </strong>{actor.gender}</li>
                        <li><strong>Species: </strong>{actor.species}</li>
                        <li><strong>Status: </strong>{actor.status}</li>
                        <li><strong>Location: </strong>{actor.location.name} </li>
                        <li><strong>Origin: </strong>{actor.origin.name}</li>
                        {/* <li><strong>Episodes: </strong>{actor.episodes}</li> */}
                        </ul>
            </figcaption>
    </figure>
    )
}

export default Characterdata
