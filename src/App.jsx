import React, { useState } from 'react';
import AppointmentsList from './components/AppointmentsList';
import NewAppointmentForm from './components/NewAppointmentForm';
import './styles/App.css';

function App() {

  const [appointments, setAppointments] = useState([]);

  const onNewAppointmentSubmit = newAppointment => {
    setAppointments([...appointments, newAppointment]);
  };

  // TODO: refector to use ID once those are implemented
  const onDeleteAppointment = deletedAppointment => {
    setAppointments(appointments.filter(appointment => {
      return JSON.stringify(appointment) !== JSON.stringify(deletedAppointment);
    }));
  };

  return (
    <div className="App">
      <h1 id="app-heading">Appointments Tracker</h1>
      <NewAppointmentForm onNewAppointmentSubmit={onNewAppointmentSubmit} />
      <AppointmentsList appointments={appointments} onDeleteAppointment={onDeleteAppointment} />
    </div>
  );
}

export default App;
