import React from 'react';
import AppointmentsListItem from './AppointmentsListItem';
import '../styles/AppointmentsList.scss';

const AppointmentsList = (props) => {

  const displayAppointments = appointments => {
    return appointments.map((appointment, index) => {
      return (
        <AppointmentsListItem
          appointment={appointment}
          key={index}
          onDeleteAppointment={props.onDeleteAppointment}
        />
      );
    });
  };

  const appointmentsSorted = props.appointments.sort((a, b) => {
    if (a.dateTime > b.dateTime) return 1;
    if (a.dateTime < b.dateTime) return -1;
    return 0;
  });

  const pastAppointments = appointmentsSorted.filter(appointment => {
    return appointment.dateTime < new Date();
  });

  const futureAppointments = appointmentsSorted.filter(appointment => {
    return appointment.dateTime >= new Date();
  });

  return (
    <div id="appointments-list">
      <h2>Appointments</h2>
      <div id="appointments-upcoming">
        <ul>
          { displayAppointments(futureAppointments) }
        </ul>
      </div>
      { pastAppointments.length !== 0 &&
        <div id="appointments-past">
          <h3>Past Appointments</h3>
          <ul>
            { displayAppointments(pastAppointments) }
          </ul>
        </div>
      }
    </div>
  );
};
 
export default AppointmentsList;
