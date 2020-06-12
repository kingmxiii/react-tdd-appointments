import React from 'react'
import { shallow, mount } from 'enzyme'
import AppointmentsDayView from './AppointmentsDayView'

const setup = (appointments = []) =>
  shallow(<AppointmentsDayView appointments={appointments} />)

describe('AppointmentsDayView', () => {
  let appointments

  it('renders component without any error', () => {
    const wrapper = setup()
    const component = wrapper.find('[data-test="appointments-view-component"]')
    expect(component.length).toBe(1)
  })

  it('initially shows a message saying there are no appointments today', () => {
    const wrapper = setup()
    const component = wrapper.find('[data-test="default-message"]')
    expect(component.length).toBe(1)
    expect(component.text()).toBe(
      'There are no appointment scheduled for today'
    )
  })

  describe('multiple appointments are passed', () => {
    let today
    let appointments
    let wrapper

    beforeEach(() => {
      today = new Date()
      appointments = [
        { startsAt: today.setHours(12, 0), customer: { firstName: 'Ashley' } },
        { startsAt: today.setHours(13, 0), customer: { firstName: 'Jordan' } },
      ]
      wrapper = setup(appointments)
    })

    it('renders multiple appointments in an ol element', () => {
      const appointmentsList = wrapper.find(
        'ol[data-test="today-appointments-list"]'
      )
      expect(appointmentsList.length).toBe(1)
      expect(appointmentsList.children().length).toBe(2)
    })

    it('renders each appointment in a li', () => {
      const appointmentsList = wrapper.find(
        'ol[data-test="today-appointments-list"]'
      )

      expect(appointmentsList.children('li').length).toBe(2)
      expect(appointmentsList.childAt(0).text()).toBe('12:00')
      expect(appointmentsList.childAt(1).text()).toBe('13:00')
    })

    it('selects the first appointment by default', () => {
      const wrapper = mount(<AppointmentsDayView appointments={appointments} />)
      expect(wrapper.text()).toMatch('Ashley')
    })

    it('has a button element in each li', () => {
      const buttons = wrapper.find('li > button')
      expect(buttons.length).toBe(2)
      expect(buttons.at(0).is('[type="button"]')).toBe(true)
    })

    it('renders another appointment when selected', () => {
      const mountedWrapper = mount(
        <AppointmentsDayView appointments={appointments} />
      )
      const button = mountedWrapper.find('[data-test="time-button"]').at(1)
      button.simulate('click')
      expect(mountedWrapper.text()).toMatch('Jordan')
    })
  })
})
