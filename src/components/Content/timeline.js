import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import Remarkable from 'remarkable'

const md = new Remarkable()

const propTypes = {
  data: PropTypes.object.isRequired
}

const rawMarkup = (text) => {
  return { __html: md.render(text) }
}

const renderItem = (item, index) => {
  const {
    title, duration, intro, description,
    repo, demo, honor
  } = item
  return (
    <div className="time-line-item" key={index}>
      <div className="tli-title">
        <h4>{title}</h4>
        {duration ? <span className="duration">{duration}</span> : null}
        {repo ? (
          <span className="duration">
            <a href={repo}>源代码</a>
          </span>
        ) : null}
        {demo ? (
          <span className="duration">
            <a href={demo}>Demo</a>
          </span>
        ) : null}
      </div>
      <div className="tli-body">
        {intro ? (
          <div>
            <FontAwesome className="icon" name="cog" />
            <div dangerouslySetInnerHTML={rawMarkup(intro)} />
          </div>
        ) : null}
        {description ? description.map((text, id) => {
          return (
            <div key={id}>
              <FontAwesome className="icon" name="star" />
              <div dangerouslySetInnerHTML={rawMarkup(text)} />
            </div>
          )
        }) : null}
        {honor ? honor.map((text, id) => {
          return (
            <div key={id}>
              <FontAwesome className="icon" name="trophy" />
              <div dangerouslySetInnerHTML={rawMarkup(text)} />
            </div>
          )
        }) : null}
      </div>
    </div>
  )
}

const TimeLine = ({ data }) => {
  const { name, icon, list } = data
  return (
    <section className="time-line">
      <div className="time-line-header">
        <FontAwesome className="icon" name={icon} />
        <h3>~/{name}</h3>
      </div>
      <div className="time-line-body">
        {list ? list.map((item, index) => {
          return renderItem(item, index)
        }) : null}
      </div>
    </section>
  )
}

TimeLine.propTypes = propTypes

export default TimeLine