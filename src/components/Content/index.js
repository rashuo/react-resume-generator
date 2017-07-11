import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import 'styles/content'
import Timeline from './timeline'

const propTypes = {
    details: PropTypes.object.isRequired
};

const Content = ({details}) => {
    const {left, right} = details;
    return (
        <div className="content row">
            <article className="col-sm-6">
                {left ? left.map((value, index) => (
                    <Timeline key={index} data={value} />
                )) : null}
            </article>
            <article className="col-sm-6">
                {right ? right.map((value, index) => (
                    <Timeline key={index} data={value} />
                )) : null}
            </article>
        </div>
    )
}

Content.propTypes = propTypes;

export default Content;