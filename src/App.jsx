import React, { useState } from 'react';
import AppointmentsList from './components/AppointmentsList';
import NewAppointmentForm from './components/NewAppointmentForm';
import './styles/App.scss';

function App() {

  const [appointments, setAppointments] = useState([]);

  const onNewAppointmentSubmit = newAppointment => {
    setAppointments([...appointments, newAppointment]);
  };

  const onDeleteAppointment = deletedAppointmentId => {
    const appointmentIndex = appointments.map(appointment => appointment.id).indexOf(deletedAppointmentId);
    const newAppointments = [...appointments];
    newAppointments.splice(appointmentIndex, 1);
    setAppointments(newAppointments);
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
