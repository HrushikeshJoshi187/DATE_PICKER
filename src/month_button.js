import React from 'react';

import './month_button.css';

import { get_date_picker_data_dispatcher, get_date_picker_data_state } from './date_picker_data_provider.js';


const months_of_year_long_forms =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export default function MonthButton(props)
{
    let state = get_date_picker_data_state();
    let dispatcher = get_date_picker_data_dispatcher();

    console.log(props.month)
    
    return (
        <button id={`month_button_${((props.month + 1) < 10) ? '0' : ''}${props.month + 1}`} className={`month_button ${(state.current_month === props.month) ? 'month_button_selected' : ''}`} aria-label={`month_button_${((props.month + 1) < 10) ? '0' : ''}${props.month + 1}`} data-test-id={`month_button_${((props.month + 1) < 10) ? '0' : ''}${props.month + 1}`} onClick={() => {dispatcher({type:'go_to_month',month:props.month})}}>
            {months_of_year_long_forms[props.month]}
        </button>
    );
}
