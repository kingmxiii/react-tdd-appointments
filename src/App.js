import React from 'react'
import AppointmentsDayView from './components/appointments-day-view/AppointmentsDayView'
import CustomerForm from './components/customer-form/CustomerForm'
import { sampleAppointments } from './sampleData'

function App() {
  return (
    <>
      <CustomerForm
        firstName="Ashley"
        lastName="Smith"
        phoneNumber="2121234545"
        onSubmit={customer => console.info('customer', customer)}
      />
      <AppointmentsDayView appointments={sampleAppointments} />
    </>
  )
}

export default App
