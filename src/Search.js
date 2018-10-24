import React from 'react';
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'

const Search = (props) => { 
  const handleSearchTermChange = function (event) {
    props.dispatch(setSearchTerm(event.target.value))
  } 
  return (    
    <input id='searchTerm' onChange={handleSearchTermChange}/>
  )
};

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Search)