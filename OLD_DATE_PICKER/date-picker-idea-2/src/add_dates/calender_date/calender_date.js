import React, { useState } from 'react';
import './calender_date.css';

function CalenderDate(props) {
    let timer = 0;
    let delay = 200;
    let prevent = false;
    
    const select_date = () =>
    {
        timer = setTimeout(function() {
            if (!prevent) {
                if(is_selected() === "selected")
                {
                    props.deselect_date(props.date);
                }
                else
                {
                    props.select_dates([props.date]);
                }
            }
            prevent = false;
        }, delay); 
    }
    
    const select_range = () =>
    {
        clearTimeout(timer);
        prevent = true;
        if(is_selected() === "selected")
        {
            props.deselect_date(props.date);
        }
        else
        {
            props.select_range(props.date);
        }
    }

    const is_selected = () =>
    {

        //console.log("date : " + props.date + " | start date : " + props.start_date + " | end date : " + props.end_date );
        if((props.dates).includes(props.date))
            return "selected";
        else if(props.date === props.start_date)
        {
            //console.log("range_selected");
            return "range_selected";
        }
        else
        {
            //console.log("not selected");
            return "deselected";
        }
    } 

    return (
        <button id="calender_date" className={is_selected()} onClick={select_date} onDoubleClick={select_range}>
            {props.date}
        </button>
    );
}

export default CalenderDate;