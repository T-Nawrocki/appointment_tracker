import React, { useState } from 'react';


export const availableTimes = () => {
  const result = [];
  const startTime = 8;
  const endTime = 18;
  
  for (let index = startTime; index < endTime; index++) {
    result.push(`${index}:00`);
    result.push(`${index}:30`);
  }
  
  return result;
}


const NewAppointmentForm = (props) => {
  
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  
  return ( 
    <form id="new-appointment-form">
      <label htmlFor="new-appointment-title">Title</label>
      <input type="text"
             name="new-appointment-title" 
             id="new-appointment-title"
             value={title} />

      <label htmlFor="new-appointment-date">Date</label>
      <input type="date" 
             name="new-appointment-date" 
             id="new-appointment-date"
             value={date} />

      <label htmlFor="new-appointment-time">Time</label>
      <select name="new-appointment-time" id="new-appointment-time" value={time}>
        <option disabled value="">--:--</option>
        {availableTimes().map((availableTime, index) => {
          return <option key={index} value={availableTime}>{availableTime}</option>
        })}
      </select>       

      <input name="new-appointment-submit" 
             type="submit" 
             value="Book appointment" />
    </form>
   );
}

 
export default NewAppointmentForm;
