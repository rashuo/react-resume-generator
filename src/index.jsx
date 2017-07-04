import { render } from 'react-dom'
import React from 'react'
import './styles/app.less'


const App = () => {
  return (
    <div className="container">
        hello world
    </div>
  )
}

const dom = document.getElementById('rootDom')

render(
  <App />,
  dom
)
