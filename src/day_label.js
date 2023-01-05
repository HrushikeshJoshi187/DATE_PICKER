import React from "react";
import './day_label.css';

let days_of_week_short_forms = ["S","M","T","W","T","F","S"];
let days_of_week_long_forms = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


export default function DayLabel(props)
{
    return (
        <div id={`day_label_${props.label_number}`} className='day_label' aria-label={days_of_week_long_forms[props.label_number]} data-test-id={`day_label_${props.label_number}`}>
            {days_of_week_short_forms[props.label_number]}
            <span id={`day_label_tooltip_${props.label_number}`} className={`day_label_tooltip day_label_${days_of_week_long_forms[props.label_number]}`} aria-label={days_of_week_long_forms[props.label_number]} data-test-id={`day_label_tooltip_${props.label_number}`}>
                {days_of_week_long_forms[props.label_number]}
            </span>
        </div>
    );
}