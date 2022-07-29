import { useState } from "react"
import { Card, Button } from "react-bootstrap"



const Company = (props) => {

    return (
        <Card style={{ width: '18rem', marginLeft: '3%', marginBottom: '2%', backgroundColor: '#FFE4C4' }}>
            <Card.Img style={{ padding: '5%' }} variant="top" src={props.img} />
            <Card.Body>
                <img>{props.logo}</img>
               <h1>{props.name}</h1>
            </Card.Body>
        </Card>
    )
}

export default Company