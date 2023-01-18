import React from 'react';

import './go_to_previous_decade.css';

import { get_date_picker_data_dispatcher, get_date_picker_data_state } from './date_picker_data_store.js';


export default function GoToPreviousDecadeButton(props)
{
    let state = get_date_picker_data_state();
    let dispatcher = get_date_picker_data_dispatcher();

    let disable_go_to_previous_decade = false;
    const lower_bound = new Date(state.lower_bound);
    if(state.lower_bound !== '')
    {
        if(state.current_decade - 10 < (lower_bound.getFullYear() - (lower_bound.getFullYear() % 10)))
        {
            disable_go_to_previous_decade = true;
        }
    }

    return (
        <button id='go_to_previous_decade' className={`go_to_previous_decade ${disable_go_to_previous_decade ? 'go_to_previous_decade_disabled' : ''}`} aria-label='Go ot previous decade' data-test-id='go_to_previous_decade'  onClick={() => {dispatcher({type: 'go_to_previous_decade'})}} disabled={disable_go_to_previous_decade}>
            {'<<<'}
        </button>
    );
}
