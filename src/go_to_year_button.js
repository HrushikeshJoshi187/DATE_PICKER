import React from 'react';
import './go_to_year_button.css';

export default function GoToYearButton(props)
{
    return (
        <button id='go_to_year_button' className='go_to_year_button' aria-label='go_to_year_button' data-test-id='go_to_year_button'>
            2023
        </button>
    );
}