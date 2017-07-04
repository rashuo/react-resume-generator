import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import '../styles/app.less'

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

const Header = () => {
  return (
    <header>
      <div className="row">
        hello world
      </div>
    </header>
  )
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;