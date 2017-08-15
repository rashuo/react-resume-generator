
import React from 'react'                     // required to get test to work.  we can get around this later with more configuration
import { shallow } from 'enzyme'              // method from enzyme which allows us to do shallow render
import Header from '../../src/components/Header'  // import our soon to be component

describe('(Components) Header', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Header name="huangkun"/>)
    expect(wrapper.type()).to.eql('header')
  })
})

