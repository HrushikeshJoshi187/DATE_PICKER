import React from 'react';

import './go_to_next_decade.css';

import { get_date_picker_data_dispatcher, get_date_picker_data_state } from './date_picker_data_store.js';


export default function GoToNextDecadeButton(props)
{
    let state = get_date_picker_data_state();
    let dispatcher = get_date_picker_data_dispatcher();

    let disable_go_to_next_decade = false;
    const upper_bound = new Date(state.upper_bound);
    if(state.upper_bound !== '')
    {
        if(state.current_decade + 10 > (upper_bound.getFullYear() - (upper_bound.getFullYear() % 10)))
        {
            disable_go_to_next_decade = true;
        }
    }

    return (
        <button id='go_to_next_decade' className={`go_to_next_decade ${disable_go_to_next_decade ? 'go_to_next_decade_disabled' : ''}`} aria-label='Go ot next decade' data-test-id='go_to_next_decade'  onClick={() => {dispatcher({type: 'go_to_next_decade'})}} disabled={disable_go_to_next_decade}>
            {'>>>'}
        </button>
    );
}
