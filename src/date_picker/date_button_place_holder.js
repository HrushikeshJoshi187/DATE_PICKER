import React from 'react';

import './date_button_place_holder.css';


export default function DateButtonPlaceHolder(props)
{
    return (
        <div id={`date_button_place_holder_${props.place_holder_number}`} className='date_button_place_holder' aria-label={`date_button_place_holder_${props.place_holder_number}`} data-test-id={`date_button_place_holder_${props.place_holder_number}`}>
            {props.date}
        </div>
    );
}