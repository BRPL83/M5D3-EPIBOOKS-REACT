import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const cardStyle = {
    width: '16rem',
    height: '35rem',
    backgroundColor: '#6C757D',
    color: 'white',
};

const imageStyle = {
    width: '15.9rem',
    height: '23rem',
};

const selectedCardStyle = {
    ...cardStyle,
    border: '2px solid red'
};

function SingleBook ({ book }) {
    const [selected, setSelected] = useState(false);

    const handleImageClick = () => {
        setSelected(!selected);
    };

    return (
        <Card style={selected ? selectedCardStyle : cardStyle}>
            <Card.Img 
            variant="top" 
            src={book.img} 
            alt={book.title}
            style={imageStyle}
            onClick={handleImageClick}
            />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
            </Card.Body>    
        </Card>
    );
}

export default SingleBook;