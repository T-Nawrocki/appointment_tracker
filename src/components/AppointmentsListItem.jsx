import React from 'react';

const AppointmentsListItem = (props) => {

  const title = props.appointment.title;
  const dateTime = props.appointment.dateTime;

  const deleteAppointment = () => {
    props.onDeleteAppointment(props.appointment.id);
  };

  return ( 
    <li className="appointments-list-item">
      <h4>{title}</h4>
      <p>
        {dateTime.toLocaleString([], {
          dateStyle: "full",
          timeStyle: "short",
          hour12: false
        })}
      </p>
      <button className="delete-button" onClick={deleteAppointment}>
        Delete
      </button>
    </li>
  );
}
 
export default AppointmentsListItem;
