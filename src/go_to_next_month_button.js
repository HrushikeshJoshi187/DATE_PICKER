import React from 'react';
import './go_to_next_month_button.css';

export default function GoToNextMonthButton(props)
{
    return (
        <button id='go_to_next_month_button' className='go_to_next_month_button' aria-label='go_to_next_month_button' data-test-id='go_to_next_month_button'>
            {'>'}
        </button>
    );
}