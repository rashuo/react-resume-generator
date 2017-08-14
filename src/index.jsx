import { render } from 'react-dom'
import React from 'react'
import 'styles/app'
// import resume from 'data/template'
import resume from 'data/my'
import Header from 'components/Header'
import Content from 'components/Content'

const {
    name, summary, contact, details,
} = resume;

const App = () => {
  return (
    <div className="container">
        <Header name={name} summary={summary} contact={contact} />
        <Content details={details} />
    </div>
  )
}

const dom = document.getElementById('rootDom')

render(
  <App />,
  dom
)
