import React from 'react'
import { shallow } from 'enzyme'

import Appointment from './Appointment'

const setup = (customer = { fisrtName: 'Ashley' }) =>
  shallow(<Appointment customer={customer} />)

describe('Appointment', () => {
  let customer
  it('renders the customer first name', () => {
    customer = { firstName: 'Ashley' }
    const wrapper = setup(customer)
    expect(wrapper.text()).toMatch('Ashley')
  })

  it('renders another customer first name', () => {
    customer = { firstName: 'Jordan' }
    const wrapper = setup(customer)
    expect(wrapper.text()).toMatch('Jordan')
  })
})
