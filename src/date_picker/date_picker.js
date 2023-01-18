import React from 'react';

import './date_picker.css';

import DatePickerDataStore from './date_picker_data_store.js';
import Calendar from './calendar.js';


export default function DatePicker(props)
{
  const valid_color_regex = /^#(?:[\da-f]{3}){1,2}$|^#(?:[\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*)\)|(rgb|hsl)a?\((\s*-?\d+%?\s*,){3}\s*(0|(0?\.\d+)|1)\)/gmi;

  const date_picker_styles = {
    '--font_family': 'Verdana, Arial, sans-serif',
    '--font_size': '16px',
    '--margin': '0px',
    '--outline': '0px',
    '--border': '0px',
    '--padding': '0px',
    '--box_sizing': 'border-box',
  
    '--not_selected_background_color': valid_color_regex.test(props.styling.not_selected_background_color) ? props.styling.not_selected_background_color : 'hsla(0, 100%, 100%, 1)',
    '--not_selected_color': valid_color_regex.test(props.styling.not_selected_color) ? props.styling.not_selected_color : 'hsla(0, 100%, 0%, 1)',
  
    '--to_be_selected_background_color': valid_color_regex.test(props.styling.to_be_selected_background_color) ? props.styling.to_be_selected_background_color : 'hsla(232, 100%, 65%, 1)',
    '--to_be_selected_color': valid_color_regex.test(props.styling.to_be_selected_color) ? props.styling.to_be_selected_color : 'hsla(0, 100%, 100%, 1)',
  
    '--selected_background_color': valid_color_regex.test(props.styling.selected_background_color) ? props.styling.selected_background_color : 'hsla(231, 100%, 47%, 1)',
    '--selected_color': valid_color_regex.test(props.styling.selected_color) ? props.styling.selected_color : 'hsla(0, 100%, 100%, 1)',
  
    '--disabled_background_color': valid_color_regex.test(props.styling.disabled_background_color) ? props.styling.disabled_background_color : 'hsla(0, 100%, 100%, 1)',
    '--disabled_color': valid_color_regex.test(props.styling.disabled_color) ? props.styling.disabled_color : 'hsla(0, 0%, 80%, 1)',
  
    '--label_background_color': valid_color_regex.test(props.styling.label_background_color) ? props.styling.label_background_color : 'hsla(0, 100%, 100%, 1)',
    '--label_color': valid_color_regex.test(props.styling.label_color) ? props.styling.label_color : 'hsla(0, 100%, 0%, 1)',
  
    '--tooltip_background_color': valid_color_regex.test(props.styling.tooltip_background_color) ? props.styling.tooltip_background_color : 'hsla(0, 0%, 50%, 1)',
    '--tooltip_color': valid_color_regex.test(props.styling.tooltip_color) ? props.styling.tooltip_color : 'hsla(0, 100%, 100%, 1)',
  }

  return (
    <div id='date_picker' className='date_picker' aria-label='Date picker' data-test-id='date_picker' style={date_picker_styles}>
      <DatePickerDataStore lower_bound={props.lower_bound} upper_bound={props.upper_bound} missing_dates={props.missing_dates} first_day_of_week={props.first_day_of_week} only_select_a_date={props.only_select_a_date}>
        <Calendar />
      </DatePickerDataStore>
    </div>
  );
}