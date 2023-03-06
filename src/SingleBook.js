import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import { CommentArea } from './CommentArea';

export const SingleBook = (props) => {
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         selected: false,
    //     };
    //     this.clickCard = this.clickCard.bind(this);
    // }
    const selected = props.selected;
    const clickCard = (event) => {
        const cambiaSelected = props.cambiaSelected;
        cambiaSelected(props.book.asin);
    }
    const book = props.book;
    
    const myStyle = selected===true ? { borderWidth: 4, borderColor: 'red', borderStyle: 'solid' } : null;
    // render() {

        return (
            <>
            <Card style={myStyle} onClick={clickCard}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        Asin {book.asin} - Prezzo {book.price}€
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* {this.props.selected && <CommentArea asin={book.asin} />} */}
            </>

        );
    // }
}
