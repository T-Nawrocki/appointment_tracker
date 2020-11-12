import React from 'react';

const AppointmentsListItem = (props) => {
  return ( 
    <li classname="appointments-list-item" key={props.index}>
      <h2>{props.appointment.title}</h2>
      <p>{props.appointment.time} {props.appointment.date}</p>
    </li>
  );
}
 
export default AppointmentsListItem;
