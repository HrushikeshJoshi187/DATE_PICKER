import React from 'react';

import './date_picker.css';

import DatePickerDataStore from './date_picker_data_store.js';
import Calendar from './calendar.js';


export default function DatePicker(props)
{
  const date_picker_styles = {
    '--font_family': 'Verdana, Arial, sans-serif',
    '--font_size': '16px',
    '--margin': '0px',
    '--outline': '0px',
    '--border': '0px',
    '--padding': '0px',
    '--box_sizing': 'border-box',
  
    '--not_selected_background_color': 'hsla(0, 100%, 100%, 1)',
    '--not_selected_color': 'hsla(0, 100%, 0%, 1)',
  
    '--to_be_selected_background_color': 'hsla(232, 100%, 65%, 1)',
    '--to_be_selected_color': 'hsla(0, 100%, 100%, 1)',
  
    '--selected_background_color': 'hsla(231, 100%, 47%, 1)',
    '--selected_color': 'hsla(0, 100%, 100%, 1)',
  
    '--disabled_background_color': 'hsla(0, 100%, 100%, 1)',
    '--disabled_color': 'hsla(0, 0%, 80%, 1)',
  
    '--label_background_color': 'hsla(0, 100%, 100%, 1)',
    '--label_color': 'hsla(0, 100%, 0%, 1)',
  
    '--tooltip_background_color': 'hsla(0, 0%, 50%, 1)',
    '--tooltip_color': 'hsla(0, 100%, 100%, 1)',
  }

  return (
    <div id='date_picker' className='date_picker' aria-label='Date picker' data-test-id='date_picker' style={date_picker_styles}>
      <DatePickerDataStore lower_bound={props.lower_bound} upper_bound={props.upper_bound} missing_dates={props.missing_dates} first_day_of_week={props.first_day_of_week} only_select_a_date={props.only_select_a_date}>
        <Calendar />
      </DatePickerDataStore>
    </div>
  );
}