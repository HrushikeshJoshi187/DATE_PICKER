import React from 'react';

import './go_to_year_button.css';

import { get_date_picker_data_state, get_date_picker_data_dispatcher } from './date_picker_data_provider.js';


export default function GoToYearButton(props)
{
    let state = get_date_picker_data_state();
    let dispatcher = get_date_picker_data_dispatcher();
    
    return (
        <button id='go_to_year_button' className='go_to_year_button' aria-label='go_to_year_button' data-test-id='go_to_year_button' onClick={() => {dispatcher({type: 'go_to_year'})}}>
            {state.current_year}
        </button>
    );
}