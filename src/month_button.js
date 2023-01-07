import React from 'react';

import './month_button.css';

import { get_date_picker_data_dispatcher, get_date_picker_data_state } from './date_picker_data_provider.js';


const months_of_year_long_forms =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export default function MonthButton(props)
{
    let state = get_date_picker_data_state();
    let dispatcher = get_date_picker_data_dispatcher();

    let disable_month_button = false;
    if(state.lower_bound !== '')
    {
        if((props.year === (new Date(state.lower_bound)).getFullYear()) && (props.month < (new Date(state.lower_bound)).getMonth()))
        {
            disable_month_button = true;
        }
    }
    if(state.upper_bound !== '')
    {
        if((props.year === (new Date(state.upper_bound)).getFullYear()) && (props.month > (new Date(state.upper_bound)).getMonth()))
        {
            disable_month_button = true;
        }
    }
    
    return (
        <button id={`month_button_${((props.month + 1) < 10) ? '0' : ''}${props.month + 1}`} className={`month_button ${(state.current_month === props.month) ? 'month_button_selected' : ''} ${disable_month_button ? 'month_button_disabled' : ''}`} aria-label={`month_button_${((props.month + 1) < 10) ? '0' : ''}${props.month + 1}`} data-test-id={`month_button_${((props.month + 1) < 10) ? '0' : ''}${props.month + 1}`} onClick={() => {dispatcher({type:'go_to_month',month:props.month})}} disabled={disable_month_button}>
            {months_of_year_long_forms[props.month]}
        </button>
    );
}
