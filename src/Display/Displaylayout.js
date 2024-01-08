import React from 'react'
import { Container } from 'react-bootstrap'
import Characterdata from './Characterdata'
import '../App.css'

const Displaylayout = ({actors}) => {

    return (
        <Container style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '10px', width: '100%'}}>
                        {actors.map((actor, key)=>(
                            <div style={{padding: '5px'}} className='character-div' key={actor.id}>
                              <Characterdata actor={actor}></Characterdata>
                            </div>
                        ))
                            }
        </Container>
    )
}

export default Displaylayout
