import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import noImage from '../../Images/noimage.jpg'

function News({title, image, description, author, readmore}) {
    // const [title] = props
  return (
   <>
      <Col lg={4}>
          <Card style={{ width: '24rem', height: "500px", marginBottom : "20px" }} className='shadow'>
          <Card.Img variant="top" src={image ? image : noImage} style={{height : "240px"}}/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            {/* <Card.Text>
              {(description).slice(0, 100)}...
            </Card.Text> */}
            <Card.Text>
              <i>{author}</i>
            </Card.Text>
            <a href={readmore} className='btn btn-primary btn-sm' target='_blank'>Read More</a>
          </Card.Body>
        </Card>
        </Col>
   </>
  );
}

export default News;
