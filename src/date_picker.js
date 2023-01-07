import React from 'react';

import './date_picker.css';

import DatePickerContainer from './date_picker_container.js';
import DatePickerDataProvider from './date_picker_data_provider.js';


export default function DatePicker()
{
  return (
    <div id='date_picker' className='date_picker' aria-label='date_picker' data-test-id='date_picker'>
      <DatePickerDataProvider lower_bound='2022-06-10' upper_bound='2024-06-20'>
        <DatePickerContainer />
      </DatePickerDataProvider>
    </div>
  );
}