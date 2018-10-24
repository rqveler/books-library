import React from 'react'
import { connect } from 'react-redux'
import {FormattedMessage} from 'react-intl'

const Book = (props) => {

  var labelStyle = {
    color: 'green',
    padding: '5px'
  };
  return (
    <div>
      <div>
        <label style={labelStyle} htmlFor="author">
          <FormattedMessage id="author"/>
        </label>
        <span id="author">{props.book.author}</span>
      </div>
      <div>
        <label style={labelStyle} htmlFor="title">
          <FormattedMessage id="title"/>
        </label>
        <span id="title">{props.book.title}</span>
      </div>      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    book: state.books.currentBook
  }
}

export default connect(mapStateToProps)(Book)

