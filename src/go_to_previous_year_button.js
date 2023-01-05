import React from 'react';
import './go_to_previous_year_button.css';

export default function GoToPreviousYearButton(props)
{
    return (
        <button id='go_to_previous_year_button' className='go_to_previous_year_button' aria-label='go_to_previous_year_button' data-test-id='go_to_previous_year_button'>
            {'<<'}
        </button>
    );
}