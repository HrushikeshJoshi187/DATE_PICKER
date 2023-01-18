import React from 'react';

import './go_to_next_month_button.css';

import { get_date_picker_data_state, get_date_picker_data_dispatcher } from './date_picker_data_store.js';


export default function GoToNextMonthButton(props)
{
    let dispatcher = get_date_picker_data_dispatcher();
    let state = get_date_picker_data_state();

    let disable_go_to_next_month = false;
    if((state.upper_bound !== '') && (state.current_year === ((new Date(state.upper_bound)).getFullYear())) && (state.current_month === (new Date(state.upper_bound)).getMonth()))
    {
        disable_go_to_next_month = true;
    }

    return (
        <button id='go_to_next_month_button' className={`go_to_next_month_button ${(disable_go_to_next_month) ? 'go_to_next_month_button_disabled' : ''}`} aria-label='go_to_next_month_button' data-test-id='go_to_next_month_button' onClick={() => {dispatcher({type: 'go_to_next_month'})}} disabled={disable_go_to_next_month}>
            {'>'}
        </button>
    );
}