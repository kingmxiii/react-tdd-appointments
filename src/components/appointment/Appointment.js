import React from 'react'
import { appointmentTimeOfDay } from '../../helpers/helper'

const Appointment = ({ customer, startsAt, stylist, service, notes }) => {
  return (
    <div id="appointmentView">
      <h3>Today's appoint at {appointmentTimeOfDay(startsAt)}</h3>
      <table>
        <tbody>
          <tr>
            <td>Customer</td>
            <td>
              {customer.firstName} {customer.lastName}
            </td>
          </tr>
          <tr>
            <td>Phone number</td>
            <td>{customer.phoneNumber}</td>
          </tr>
          <tr>
            <td>Stylist</td>
            <td>{stylist}</td>
          </tr>
          <tr>
            <td>Service</td>
            <td>{service}</td>
          </tr>
          <tr>
            <td>Notes</td>
            <td>{notes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Appointment
