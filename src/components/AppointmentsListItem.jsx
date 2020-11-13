import React from 'react';
import '../styles/AppointmentsListItem.scss';

const AppointmentsListItem = (props) => {

  const title = props.appointment.title;
  const dateTime = props.appointment.dateTime;

  const deleteAppointment = () => {
    props.onDeleteAppointment(props.appointment.id);
  };

  return ( 
    <li className="appointments-list-item">
      <div className="content">
        <h4>{title}</h4>
        <div>
          {dateTime.toLocaleString([], {
            dateStyle: "full",
            timeStyle: "short",
            hour12: false
          })}
        </div>
      </div>
      <button className="delete-button" onClick={deleteAppointment}>
        Delete
      </button>
    </li>
  );
}
 
export default AppointmentsListItem;
