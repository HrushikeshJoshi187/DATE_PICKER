import React from 'react';

import './month_button.css';

import { get_date_picker_data_dispatcher, get_date_picker_data_state } from './date_picker_data_provider.js';


const months_of_year_long_forms =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export default function MonthButton(props)
{
    let state = get_date_picker_data_state();
    let dispatcher = get_date_picker_data_dispatcher();
    let date = `${props.year}-${((props.month + 1) < 10) ? '0' : ''}${props.month + 1}-${((props.date) < 10) ? '0' : ''}${props.date}`;
    
    return (
        <button id={`month_button_${date}`} className={`date_button ${(state.selected_dates.has(date)) ? 'month_button_selected' : ''} ${(state.range_start === date) ? 'month_button_range_start_selected' : ''} ${(state.present_year === props.year && state.present_month === props.month && state.present_date === props.date) ? `month_button_present_date`: ''} ${(disable_date || state.missing_dates.has(date)) ? 'month_button_disabled' : ''}`} aria-label={`${props.date} ${months_of_year_long_forms[props.month]} ${props.year}`} data-test-id={`month_button_${date}`}>
            {props.month}
        </button>
    );
}
