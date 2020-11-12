import React from 'react';
import AppointmentsListItem from './AppointmentsListItem';

const AppointmentsList = (props) => {
  const appointmentsSorted = props.appointments.sort((a, b) => {
    if (a.dateTime > b.dateTime) return 1;
    if (a.dateTime < b.dateTime) return -1;
    return 0;
  });

  return ( 
    <ul id="appointments-list">
      {appointmentsSorted.map((appointment, index) => {
        return (
          <AppointmentsListItem appointment={appointment} key={index} />
        );
      })}
    </ul>
  );
}
 
export default AppointmentsList;
