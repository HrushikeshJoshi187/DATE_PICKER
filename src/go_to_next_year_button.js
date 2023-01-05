import React from "react";
import './go_to_next_year_button.css';

export default function GoToNextYearButton(props)
{
    return (
        <button id='go_to_next_year_button' className='go_to_next_year_button' aria-label='go_to_next_year_button' data-test-id='go_to_next_year_button'>
            {'>>'}
        </button>
    );
}