import React from 'react';

const AppointmentsListItem = (props) => {

  const title = props.appointment.title;
  const dateTime = props.appointment.dateTime;

  return ( 
    <li className="appointments-list-item">
      <h2>{title}</h2>
      <p>
        {dateTime.getHours()}:{dateTime.getMinutes()}, {dateTime.toLocaleDateString()}
      </p>
    </li>
  );
}
 
export default AppointmentsListItem;
