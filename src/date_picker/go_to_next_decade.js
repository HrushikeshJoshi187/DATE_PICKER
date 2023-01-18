import React from 'react';

import './go_to_next_decade.css';

import { get_date_picker_data_dispatcher, get_date_picker_data_state } from './date_picker_data_store.js';


export default function YearButton(props)
{
    let state = get_date_picker_data_state();
    let dispatcher = get_date_picker_data_dispatcher();

    let disable_year_button = false;
    if(state.lower_bound !== '')
    {
        if(props.year < (new Date(state.lower_bound)).getFullYear())
        {
            disable_year_button = true;
        }
    }
    if(state.upper_bound !== '')
    {
        if(props.year > (new Date(state.upper_bound)).getFullYear())
        {
            disable_year_button = true;
        }
    }

    return (
        <button id={`year_button_${props.year}`} className={`year_button ${(state.current_year === props.year) ? 'year_button_selected' : ''} ${disable_year_button ? 'year_button_disabled' : ''}`} aria-label={props.year} data-test-id={`year_button_${props.year}`} onClick={() => {dispatcher({type:'go_to_year',year: props.year, month: props.month})}} disabled={disable_year_button}>
            {props.year}
        </button>
    );
}
