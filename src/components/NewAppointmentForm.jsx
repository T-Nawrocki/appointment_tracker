import React, { useState } from 'react';
import { parseDateTime, availableTimes } from '../helpers';


const NewAppointmentForm = (props) => {
  
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [inputWarnings, setInputWarnings] = useState([]);

  const cleanup = () => {
    setTitle("");
    setDate("");
    setTime("");
    setInputWarnings([]);
  };

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

    if (!submittedTitle || !submittedDate || !submittedTime) {
      const newInputWarnings = []
      if (!submittedTitle) newInputWarnings.push("Please provide a title for the appointment.");
      if (!submittedDate) newInputWarnings.push("Please select a date for the appointment.");
      if (!submittedTime) newInputWarnings.push("Please select a time slot for the appointment.");
      setInputWarnings(newInputWarnings);
      return;      
    }

    const submittedDateTime = parseDateTime(submittedDate, submittedTime);
    // TODO: add an id of some sort
    props.onNewAppointmentSubmit({
      title: submittedTitle,
      dateTime: submittedDateTime
    });

    cleanup();
  }
  
  return ( 
    <>
      <ul id="input-warnings">
        {inputWarnings.map(warning => <li>{warning}</li>)}
      </ul>
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
              min={new Date().toISOString().split("T")[0]}
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
    </>
  );
}

 
export default NewAppointmentForm;
