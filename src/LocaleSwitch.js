import React from 'react'
import { connect } from 'react-redux'
import { changeLocale } from './actionCreators'



const LocaleSwitch = (props) => {
  const handleLocaleChange = () => {
    const locale = (props.locale === 'he' ? 'en' : 'he')
    props.dispatch(changeLocale(locale))
  }
  return (
    <button onClick={handleLocaleChange}>
      Change Language
  </button>
  )
}

const mapStateToProps = (state) => ({
  locale: state.locale
})

export default connect(mapStateToProps)(LocaleSwitch)


