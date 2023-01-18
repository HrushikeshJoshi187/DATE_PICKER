import React from 'react';

import './date_picker_container.css';

import Calendar from './calendar.js';


export default function DatePickerContainer(props)
{
    return (
        <div id='date_picker_container' className='date_picker_container' aria-label='date_picker_container' data-test-id='date_picker_container'>           
            <Calendar first_day_of_week={0} />
        </div>
    );
}