import React from 'react';

import './go_to_previous_month_button.css';

import { get_date_picker_data_state, get_date_picker_data_dispatcher } from './date_picker_data_provider.js';


export default function GoToPreviousMonthButton(props)
{
    let dispatcher = get_date_picker_data_dispatcher();
    let state = get_date_picker_data_state();

    let can_go_to_previous_month = false;
    if(state.current_year === ((new Date(state.lower_bound)).getFullYear()))
    {
        if(state.current_month > (new Date(state.lower_bound)).getMonth())
        {
            can_go_to_previous_month = true;
        }
    }
    else if(state.current_year > ((new Date(state.lower_bound)).getFullYear()))
    {
        can_go_to_previous_month = true;
    }

    return (
        <button id='go_to_previous_month_button' className={`go_to_previous_month_button ${(!can_go_to_previous_month) ? 'go_to_previous_month_button_disabled' : ''}`} aria-label='go_to_previous_month_button' data-test-id='go_to_previous_month_button' onClick={() => {dispatcher({type: 'go_to_previous_month'})}} disabled={!can_go_to_previous_month}>
            {'<'}
        </button>
    );
}