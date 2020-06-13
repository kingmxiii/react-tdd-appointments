import React from 'react'
import AppointmentsDayView from './components/appointments-day-view/AppointmentsDayView'
import { sampleAppointments } from './sampleData'

function App() {
  return <AppointmentsDayView appointments={sampleAppointments} />
}

export default App
