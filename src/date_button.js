import React from 'react';

import './date_button.css';

import { get_date_picker_data_dispatcher, get_date_picker_data_state } from './date_picker_data_provider.js';


const months_of_year_long_forms =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export default function DateButton(props)
{
    let state = get_date_picker_data_state();
    let dispatcher = get_date_picker_data_dispatcher();
    let date = `${props.year}-${((props.month + 1) < 10) ? '0' : ''}${props.month + 1}-${((props.date) < 10) ? '0' : ''}${props.date}`;

    let start_time;
    let end_time;
    
    const action_start = () => {
        start_time = new Date();
    }

    const action_end = () => {
        end_time = new Date();
        const click_duration = end_time - start_time;
        if(click_duration > 500)
        {
            dispatcher({type: 'check_range', clicked_date: date});
        }
        else
        {
            dispatcher({type: 'check_date', clicked_date: date});
        }
    }
    
    return (
        <button id={`date_button_${date}`} className={`date_button ${(state.selected_dates.has(date)) ? 'date_button_selected' : ''} ${(state.range_start === date) ? 'date_button_range_start_selected' : ''} ${(state.present_year === props.year && state.present_month === props.month && state.present_date === props.date) ? `date_button_present_date`: ''}`} aria-label={`${props.date} ${months_of_year_long_forms[props.month]} ${props.year}`} data-test-id={`date_button_${date}`} onMouseDown={action_start} onMouseUp={action_end} >
            {props.date}
        </button>
    );
}