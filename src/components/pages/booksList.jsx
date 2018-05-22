'use strict'

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksActions';

import { Grid, Col, Row, Button } from 'react-bootstrap';


import BookItem from './bookItem';
import BooksForm from './BooksForm';

class BooksList extends React.Component {

    componentDidMount() {
        // Dispatch an action.
        this.props.getBooks();
    }

    render() {

        // console.log('ARE WE CAN ACESSSING THE STATE: ', this.props.books );

        const booksList = this
            .props
            .books
            .map(function (book) {
                return (

                    <Col xs={12} sm={6} md={4} key={book.id}>
                        <BookItem
                            id={book.id}
                            title={book.title}
                            description={book.description}
                            price={book.price}
                        />
                    </Col>
                );
            })

        return (
            // <div className="container">
            <Grid>
                <Row style={{ marginTop: '15px' }}>
                    <Col xs={12} sm={6}>
                        <BooksForm />
                    </Col>
                    {booksList}
                </Row>
            </Grid>
        );
    }
}

function mapStateToProp(state) {
    return { books: state.books.books }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBooks: getBooks
    }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProps)(BooksList);
