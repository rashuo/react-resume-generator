import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import 'styles/header'

const propTypes = {
  name: PropTypes.string.isRequired,
  summary: PropTypes.arrayOf(
    PropTypes.string
  ),
  contact: PropTypes.arrayOf(
    PropTypes.object
  )
}


const defaultProps = {
  summary: [],
  contact: []
}


const renderSummary = (summary) => {
  return summary.map((item, index) => {
    return (
      <small key={index}>{item}</small>
    )
  })
}
const renderContact = (contact) => {
  return contact.map((item, index) => {
    return (
      <small key={index}>
        <FontAwesome className="icon" name={item.icon} />
        <span className="tip">{item.name}</span>
        <a href={item.url}>{item.show}</a>
      </small>
    )
  })
}
const Header = ({name, summary, contact}) => {
  console.log('name: ', name)
  return (
    <header>
      <aside className="header-left">
        <h1>{name}</h1>
        {renderSummary(summary)}
      </aside>
      <aside className="header-right">
        {renderContact(contact)}
      </aside>
    </header>
  )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header