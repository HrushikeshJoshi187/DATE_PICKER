import React from 'react';

import './go_to_previous_year_button.css';

import { get_date_picker_data_state, get_date_picker_data_dispatcher } from './date_picker_data_provider.js';


export default function GoToPreviousYearButton(props)
{
    let dispatcher = get_date_picker_data_dispatcher();
    let state = get_date_picker_data_state();

    let disable_go_to_previous_year = false;
    if(state.lower_bound !== '')
    {
        if(state.current_year === ((new Date(state.lower_bound)).getFullYear() + 1))
        {
            if(state.current_month < (new Date(state.lower_bound)).getMonth())
            {
                disable_go_to_previous_year = true;
            }
        }
        else if(state.current_year === ((new Date(state.lower_bound)).getFullYear()))
        {
            disable_go_to_previous_year = true;
        }
    }

    return (
        <button id='go_to_previous_year_button' className={`go_to_previous_year_button ${(disable_go_to_previous_year) ? 'go_to_previous_year_button_disabled' : ''}`} aria-label='go_to_previous_year_button' data-test-id='go_to_previous_year_button' onClick={() => {dispatcher({type: 'go_to_previous_year'})}} disabled={disable_go_to_previous_year}>
            {'<<'}
        </button>
    );
}