import React from 'react';

import './go_to_month_button.css';

import { get_date_picker_data_state } from './date_picker_data_provider.js';


const months_of_year_long_forms =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export default function GoToMonthButton(props)
{
    let state = get_date_picker_data_state();

    return (
        <button id='go_to_month_button' className='go_to_month_button' aria-label='go_to_month_button' data-test-id='go_to_month_button'>
            {months_of_year_long_forms[state.current_month]}
        </button>
    );
}