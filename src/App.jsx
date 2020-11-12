import React, { useState } from 'react';
import AppointmentsList from './components/AppointmentsList';
import NewAppointmentForm from './components/NewAppointmentForm';
import './styles/App.css';

function App() {

  const [appointments, setAppointments] = useState([]);

  const onNewAppointmentSubmit = newAppointment => {
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <div className="App">
      <h1 id="app-heading">Appointments Tracker</h1>
      <NewAppointmentForm onNewAppointmentSubmit={onNewAppointmentSubmit} />
      <AppointmentsList appointments={appointments} />
    </div>
  );
}

export default App;
