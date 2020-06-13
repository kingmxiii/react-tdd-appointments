import React from 'react'
import Appointment from '../appointment/Appointment'
import { appointmentTimeOfDay } from '../../helpers/helper'

const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = React.useState(0)
  return (
    <div data-test="appointments-view-component" id="appointmentsDayView">
      <ol data-test="today-appointments-list">
        {appointments.map((a, i) => (
          <li key={a.startsAt}>
            <button
              data-test="time-button"
              type="button"
              onClick={() => setSelectedAppointment(i)}
            >
              {appointmentTimeOfDay(a.startsAt)}
            </button>
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p data-test="default-message">
          There are no appointment scheduled for today
        </p>
      ) : (
        <Appointment {...appointments[selectedAppointment]} />
      )}
    </div>
  )
}

export default AppointmentsDayView
