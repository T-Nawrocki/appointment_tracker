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
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleTitleChange = event => {
    setTitle(event.target.value);
  }

  const handleDateChange = event => {
    setDate(event.target.value);
  }

  const handleTimeChange = event => {
    setTime(event.target.value);
  }

  const handleNewAppointmentSubmit = event => {
    event.preventDefault();
    const submittedTitle = title.trim();
    const submittedDate = date;
    const submittedTime = time;

    // TODO: Add some feedback to user for failed submission
    if (!submittedTitle || !submittedDate || !submittedTime) return;

    props.onNewAppointmentSubmit({
      title: submittedTitle,
      date: submittedDate,
      time: submittedTime
    });

    setTitle("");
    setDate("");
    setTime("");
  }
  
  return ( 
    <form id="new-appointment-form" onSubmit={handleNewAppointmentSubmit}>
      <label htmlFor="new-appointment-title">Title</label>
      <input type="text"
             name="new-appointment-title" 
             id="new-appointment-title"
             value={title}
             onChange={handleTitleChange} />

      <label htmlFor="new-appointment-date">Date</label>
      <input type="date" 
             name="new-appointment-date" 
             id="new-appointment-date"
             value={date}
             onChange = {handleDateChange} />

      <label htmlFor="new-appointment-time">Time</label>
      <select name="new-appointment-time" 
              id="new-appointment-time" 
              value={time}
              onChange={handleTimeChange}>

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
