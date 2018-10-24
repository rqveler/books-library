import React from 'react'
import getLoanEndDate from './addDays'
import { connect } from 'react-redux'
import { setLoanDate } from './actionCreators'
import {FormattedMessage, FormattedDate} from 'react-intl';

const isLoanable = (loanDuration) => {
  return (loanDuration > 0)
}

const BookLoanStatus = (props) => {

  const handleLoan = function () {
    props.setLoanDate()
  } 

  const textStyle = {padding: '5px'}

  let loan = null
  if (!isLoanable(props.maxLoanDuration)) {
    loan = <FormattedMessage  id="notForLoan"/>
  }
  else if (props.loanedAt) {
    const loanEndDate = getLoanEndDate(props.loanedAt, props.maxLoanDuration)
    loan = 
    <div>
      <span style={textStyle}>
        <FormattedMessage id="loanedUntil"/>        
      </span>     
      <FormattedDate
            value={loanEndDate}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long'
        />     
     </div>
  }
  else {
    loan = <button onClick={handleLoan}>
           Loan
     </button>
  }
  return (<div>
    {loan}
  </div>)
}

const mapStateToProps = (state) => {
  return {
    maxLoanDuration: state.books.currentBook.maxLoanDuration,
    loanedAt: state.books.currentBook.loanedAt
  }
}

export default connect(mapStateToProps, {setLoanDate})(BookLoanStatus)
