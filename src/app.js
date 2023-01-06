import React from 'react';

import './app.css';

import DatePicker from './date_picker.js';


export default function App()
{
  return (
    <div id='app' className='app' aria-label='app' data-test-id='app'>
      <DatePicker />
    </div>
  );
}