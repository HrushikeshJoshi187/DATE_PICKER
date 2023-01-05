import React from "react";
import './date_button.css';

export default function DateButton(props)
{
    return (
        <button id='date_button' className='date_button' aria-label='1st January' data-test-id='1st January'>
            {props.date + 1}
        </button>
    );
}