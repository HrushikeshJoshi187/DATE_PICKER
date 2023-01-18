import React from 'react';

import './go_to_previous_month_button.css';

import { get_date_picker_data_state, get_date_picker_data_dispatcher } from './date_picker_data_store.js';


export default function GoToPreviousMonthButton(props)
{
    let dispatcher = get_date_picker_data_dispatcher();
    let state = get_date_picker_data_state();

    let disable_go_to_previous_month = false;
    if((state.lower_bound !== '') && (state.current_year === ((new Date(state.lower_bound)).getFullYear())) && (state.current_month === (new Date(state.lower_bound)).getMonth()))
    {
        disable_go_to_previous_month = true;
    }

    return (
        <button id='go_to_previous_month_button' className={`go_to_previous_month_button ${(disable_go_to_previous_month) ? 'go_to_previous_month_button_disabled' : ''}`} aria-label='Go to previous month button' data-test-id='go_to_previous_month_button' onClick={() => {dispatcher({type: 'go_to_previous_month'})}} disabled={disable_go_to_previous_month}>
            {'<'}
        </button>
    );
}