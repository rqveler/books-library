import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { getAllBooks, setCurrentBook } from './actionCreators'
import Book from './Book'
import BookLoanStatus from './BookLoanStatus'



class Books extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.books.length === 0) {
      this.props.dispatch(getAllBooks(this.props.books))
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" render={() => <h1>welcome</h1>} />
          <Route
            exact={true} path="/books"
            component={() => (
              <div>
                {this.props.books
                  .filter(book =>
                    !this.props.searchTerm ||
                    book.title
                      .toLowerCase()
                      .includes(this.props.searchTerm.toLowerCase()))
                  .map(book =>
                    <Link to={`/details/${book.id}`}>
                      <div>{book.title}</div>
                    </Link>)}
              </div>
            )}
          />
          <Route exact={true} path="/details/:id"
            render={({ match }) => {

              const currentBook = this.props.books.find(b => b.id == match.params.id)

              this.props.dispatch(setCurrentBook(currentBook))

              return (<div>
                <Book />
                <BookLoanStatus />
              </div>
              )
            }} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    books: state.books.books
  }
}

export default connect(mapStateToProps)(Books)
