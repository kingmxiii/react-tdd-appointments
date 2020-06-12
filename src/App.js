import React from 'react'
import AppointmentsDayView from './components/appointments-day-view/AppointmentsDayView'
import { sampleAppointments } from './sampleData'

function App() {
  return (
    <div className="App">
      <AppointmentsDayView appointments={sampleAppointments} />
    </div>
  )
}

export default App
