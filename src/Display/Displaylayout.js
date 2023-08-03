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
                            <Col md={3} sm={4} xs={12} key={actor.id}>
                              <Characterdata actor={actor}></Characterdata>
                            </Col>
                        ))
                            }
                    {/* </section> */}
                
            </Row>
        </Container>
    )
}

export default Displaylayout
