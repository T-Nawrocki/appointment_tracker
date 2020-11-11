import React, { useState } from 'react';

const NewAppointmentForm = (props) => {
  
  return ( 
    <form id="new-appointment-form">
      <label htmlFor="new-appointment-title">Title</label>
      <input type="text"
             name="new-appointment-title" 
             id="new-appointment-title" />

      <label htmlFor="new-appointment-date">Date</label>
      <input type="date" 
             name="new-appointment-date" 
             id="new-appointment-date"/>

      <label htmlFor="new-appointment-time">Time</label>
      <select name="new-appointment-time" id="new-appointment-time">
        
      </select>       

      <input name="new-appointment-submit" 
             type="submit" 
             value="Book appointment" />
    </form>
   );
}
 
export default NewAppointmentForm;
