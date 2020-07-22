import React from 'react'
import Characterdata from './Characterdata'

const Displaylayout = ({actors}) => {

    return (
        <section className='displaylayout'>
            {actors.map((actor, key)=>(
                <Characterdata key={actor.id} actor={actor}></Characterdata>
            ))
                }
        </section>
    )
}

export default Displaylayout
