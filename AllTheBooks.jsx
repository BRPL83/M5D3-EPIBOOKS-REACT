import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SingleBook from './SingleBook';

class AllTheBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      filterText: '',
      filteredBooks: [],
    };
  }

  componentDidMount() {
    //Caricherà i dati file JSON fantasy.json
    fetch('./fantasy.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ books: data, filteredBooks: data });
      })
      .catch((error) => {
        console.error('Si è verificato un errore durante il recupero dei dati.', error);
      });
    }

    handleFilterChange = (event) => {
      this.setState({ filterText: event.target.value });
    };

    handleSearchClick = () => {
      this.filterBooks();
    };

    filterBooks = () => {
      const { books, filterText } = this.state;
      const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(filterText.toLowerCase())
      );
      this.setState({ filteredBooks });
    };

    render() {
      const { filterText, filteredBooks } = this.state;

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1 className="text-white display-6">Fantasy books</h1>
      <Form className='d-flex'>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Your book title..."
            value={filterText}
            onChange={this.handleFilterChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={this.handleSearchClick}>Search!</Button>
      </Form>
      <Row>
        {filteredBooks.map((book) => (
          <Col key={book.id} xs={6} md={4} lg={3} xl={3}className='mb-2 my-4'>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
    );
  }
}
export default AllTheBooks;