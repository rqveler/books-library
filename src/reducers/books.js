import { ADD_BOOKS_DATA, SET_CURRENT_BOOK, SET_LOAN_DATE } from "../actions";

const DEFAULT_STATE = {
  books: [],
  currentBook: {}
};

const addBOOKSData = (state, action) => {
  return Object.assign({}, state, { books: action.books });
};

const setCurrentBook = (state, action) => {
  return Object.assign({}, state, { currentBook: action.book });
};

const setLoanDate = (state, action) => {
  const currentBookdId = state.currentBook.id;
  const books = state.books.map(
    b =>
      b.id !== currentBookdId
        ? b
        : Object.assign({}, state.currentBook, { loanedAt: action.date })
  );
  const currentBook = books.find(b => b.id === currentBookdId);
  
  return Object.assign({}, state, { books: books, currentBook: currentBook });
};

const books = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_BOOKS_DATA:
      return addBOOKSData(state, action);
    case SET_CURRENT_BOOK:
      return setCurrentBook(state, action);
    case SET_LOAN_DATE:
      return setLoanDate(state, action);
    default:
      return state;
  }
};

export default books;
