import React from 'react';
import './date_picker_container.css';
import DateButtons from './date_buttons.js';

export default function DatePickerContainer(props)
{

    return (
        <div id='date_picker_container' className='date_picker_container' aria-label='date_picker_container' data-test-id='date_picker_container'>           
            <DateButtons present_date={props.present_date} first_day_of_week={0}/>
        </div>
    );
}