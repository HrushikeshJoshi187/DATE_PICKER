import React from 'react';

import './date_button.css';

import { get_date_picker_data_dispatcher, get_date_picker_data_state } from './date_picker_data_provider.js';


const months_of_year_long_forms =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export default function DateButton(props)
{
    let state = get_date_picker_data_state();
    let dispatcher = get_date_picker_data_dispatcher();
    let date = `${props.year}-${((props.month + 1) < 10) ? '0' : ''}${props.month + 1}-${((props.date) < 10) ? '0' : ''}${props.date}`;

    /*
    let pendingClick = 0;
    let delay = 200;
    let determine_number_of_clicks = (e) => {
        if (pendingClick) {
            clearTimeout(pendingClick);
            pendingClick = 0;
        }

        switch (e.detail) {
            case 1:
                pendingClick = setTimeout(function() {
                    dispatcher({type: 'check_date', clicked_date: date})
                }, delay);
                break;
            case 2:
                dispatcher({type: 'check_range', clicked_date: date})
                break;
            default:
                console.log('More than two clicks !');
                break;
        }
    }

    return (
        <button id={`date_button_${date}`} className={`date_button ${(state.selected_dates.has(date)) ? 'date_button_selected' : ''} ${(state.range_start === date) ? 'date_button_range_start_selected' : ''}`} aria-label={`${props.date} ${months_of_year_long_forms[props.month]} ${props.year}`} data-test-id={`date_button_${date}`} onClick={determine_number_of_clicks}>
            {props.date}
        </button>
    );
    */
    return (
        <button id={`date_button_${date}`} className={`date_button ${(state.selected_dates.has(date)) ? 'date_button_selected' : ''} ${(state.range_start === date) ? 'date_button_range_start_selected' : ''}`} aria-label={`${props.date} ${months_of_year_long_forms[props.month]} ${props.year}`} data-test-id={`date_button_${date}`} onClick={() => {dispatcher({type: 'check_date', clicked_date: date})}} onDoubleClick={() => {dispatcher({type: 'check_range', clicked_date: date})}}>
            {props.date}
        </button>
    );
}