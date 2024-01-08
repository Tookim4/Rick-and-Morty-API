import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Characterdata from './Characterdata'
import '../App.css'

const Displaylayout = ({actors}) => {

    return (
        <Container style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '10px', width: '100%'}}>
            {/* <Row > */}
                
                    {/* <section className='displaylayout'> */}
                        {actors.map((actor, key)=>(
                            <div style={{padding: '5px'}} className='character-div' key={actor.id}>
                              <Characterdata actor={actor}></Characterdata>
                            </div>
                        ))
                            }
                    {/* </section> */}
                
            {/* </Row> */}
        </Container>
    )
}

export default Displaylayout
