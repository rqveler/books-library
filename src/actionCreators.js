import {
  SET_SEARCH_TERM,
  ADD_BOOKS_DATA,
  SET_CURRENT_BOOK,
  SET_LOAN_DATE,
  CHANGE_LOCALE
} from "./actions";
import moment from "moment";
import { getAll as getBooks } from "./services/books";
import { update as updateLoanDate } from "./services/books";

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm };
}

export function changeLocale(locale) {
  return { type: CHANGE_LOCALE, locale };
}

export function addBooksData(books) {
  return { type: ADD_BOOKS_DATA, books };
}

export function getAllBooks() {
  return function(dispatch, getState) {
    getBooks().then(books => dispatch(addBooksData(books)));
  };
}

export function setCurrentBook(book = {}) {
  return { type: SET_CURRENT_BOOK, book };
}

export function setLoanDate(date = moment().format("DD-MM-YYYY")) {
  return function(dispatch, getState) {
    updateLoanDate(
      Object.assign({}, getState().currentBook, { loanedAt: date })
    ).then(res => dispatch({ type: SET_LOAN_DATE, date }));
  };
}
