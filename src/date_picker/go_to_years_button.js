import React from 'react';

import './go_to_years_button.css';

import { get_date_picker_data_state, get_date_picker_data_dispatcher } from './date_picker_data_store.js';


export default function GoToYearButton(props)
{
    let state = get_date_picker_data_state();
    let dispatcher = get_date_picker_data_dispatcher();
    
    return (
        <button id='go_to_years_button' className={`go_to_years_button  ${(state.go_to_year_mode === true) ? 'go_to_years_button_selected' : ''}`} aria-label='go_to_years_button' data-test-id='go_to_years_button' onClick={() => {dispatcher({type: 'go_to_years'})}}>
            {state.current_year}
        </button>
    );
}