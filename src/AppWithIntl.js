import React from 'react';
import { connect } from 'react-redux'
import Search from './Search'
import Books from './Books'
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import he from 'react-intl/locale-data/he';
import messages from './messages'
import { BrowserRouter as Router, Route } from 'react-router-dom'

addLocaleData([...en, ...he]);

const AppWithIntl = (props) => (
  <IntlProvider key={props.locale} locale={props.locale} messages={messages[props.locale]}>
    <div dir={props.locale === 'he' ? 'rtl' : 'ltr'} className="App-intro">
      <Router>
        <div>           
           <Search />
           <Books />
        </div>
      </Router>
    </div>
  </IntlProvider>)

const mapStateToProps = (state) => {
  return {
    locale: state.locale
  }
}

export default connect(mapStateToProps)(AppWithIntl);