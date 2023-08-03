import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Characterdata from './Characterdata'
import '../App.css'

const Displaylayout = ({actors}) => {

    return (
        <Container style={{display: 'flex', justifyContent: 'center'}}>
            <Row >
                
                    {/* <section className='displaylayout'> */}
                        {actors.map((actor, key)=>(
                            <Col md={3} sm={4} xs={12}>
                              <Characterdata key={actor.id} actor={actor}></Characterdata>
                            </Col>
                        ))
                            }
                    {/* </section> */}
                
            </Row>
        </Container>
    )
}

export default Displaylayout
