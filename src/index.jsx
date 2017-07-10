import { render } from 'react-dom'
import React from 'react'
import 'styles/app'
import resume from 'data/template'
import Header from 'components/Header'

const {
    name, summary, contact, details,
} = resume;

const App = () => {
  return (
    <div className="container">
        <Header name={name} summary={summary} contact={contact} />
    </div>
  )
}

const dom = document.getElementById('rootDom')

render(
  <App />,
  dom
)
