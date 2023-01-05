import React from 'react';
import './date_button.css';
import { get_present_date } from './date_picker_data_provider';

export default function DateButton(props)
{
    const { present_date, set_present_date } = get_present_date();
    return (
        <button id='date_button' className='date_button' aria-label='1st January' data-test-id='1st January' onClick={() => {set_present_date({year: present_date.year, month: present_date.month, date: props.date + 1})}}>
            {props.date + 1}
        </button>
    );
}