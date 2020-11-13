import React from 'react';
import AppointmentsListItem from './AppointmentsListItem';

const AppointmentsList = (props) => {
  const appointmentsSorted = props.appointments.sort((a, b) => {
    if (a.dateTime > b.dateTime) return 1;
    if (a.dateTime < b.dateTime) return -1;
    return 0;
  });

  // const thisWeek = appointmentsSorted.filter(appointment => {
  //   const today = new Date();
  //   const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  //   const daysLeftInWeek = 7 - today.getDay();
  //   const timeLeftInWeek = daysLeftInWeek * 24 * 60 * 60 * 1000;
  //   const endOfWeek = startOfToday + timeLeftInWeek;
  //   console.log('today :>> ', today);
  //   console.log('startOfToday :>> ', startOfToday);
  //   console.log('daysLeftInWeek :>> ', daysLeftInWeek);
  //   console.log('timeLeftInWeek :>> ', timeLeftInWeek);
  //   console.log('endOfWeek :>> ', endOfWeek);
  //   return appointment.dateTime < endOfWeek;
  // });

  return ( 
    <ul id="appointments-list">
      {appointmentsSorted.map((appointment, index) => {
        return (
          <AppointmentsListItem 
            appointment={appointment} 
            key={index} 
            onDeleteAppointment={props.onDeleteAppointment} 
          />
        );
      })}
    </ul>
  );
}
 
export default AppointmentsList;
