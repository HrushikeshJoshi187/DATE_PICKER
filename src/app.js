import React from 'react';
import './app.css';
import DatePickerContainer from './date_picker_container.js';
import DatePickerDataProvider from './date_picker_data_provider.js';

export default function App()
{
  return (
    <div id='app' className='app' aria-label='app' data-test-id='app'>
      <DatePickerDataProvider>
        <DatePickerContainer />
      </DatePickerDataProvider>
    </div>
  );
}