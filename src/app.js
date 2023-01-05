import React from 'react';
import './app.css';
import DatePickerContainer from './date_picker_container.js'

export default function App()
{
  let present_date = new Date()
  present_date = new Date(present_date.getFullYear(), present_date.getMonth(), present_date.getDate());

  return (
    <div id='app' className='app' aria-label='app' data-test-id='app'>
      <DatePickerContainer present_date={present_date}/>
    </div>
  );
}