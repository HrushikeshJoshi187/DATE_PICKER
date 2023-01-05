import React from 'react';
import './date_buttons.css';
import DateButton from './date_button.js';
import DateButtonPlaceHolder from './date_button_place_holder.js';
import DayLabel from './day_label.js';
import GoToPreviousYearButton from './go_to_previous_year_button.js';
import GoToPreviousMonthButton from './go_to_previous_month_button.js';
import GoToMonthButton from './go_to_month_button.js';
import GoToYearButton from './go_to_year_button.js';
import GoToNextMonthButton from './go_to_next_month_button.js';
import GoToNextyearButton from './go_to_next_year_button.js';

let number_of_dates_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default function DateButtons(props)
{
    let year = props.present_date.getFullYear();
    let month = props.present_date.getMonth();
    let date = props.present_date.getDate();

    year = 2023;
    month = 3; 

    let week_days_labels= [];
    let number_of_days_in_a_week = 7;
    let place_holder_before_dates = [];
    let place_holder_after_dates = [];
    let dates_in_month = [];
    let extra_day = 0;
    let total_number_of_dates = 42;
    

    let first_day = (new Date(year, month , 1)).getDay();
    let number_of_place_holders_before_dates = first_day - props.first_day_of_week;
    
    extra_day = ((month === 1) && (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)) ? 1 : 0;

    for(let i = 0; i < number_of_days_in_a_week; i++)
    {
        week_days_labels.push(
            <DayLabel label_number={i} />
        )
    }

    for(let i = 0, k = (month === 0 ? 31 : number_of_dates_in_month[month - 1]) - number_of_place_holders_before_dates + 1; i < number_of_place_holders_before_dates; i++, k++)
    {
        place_holder_before_dates.push(
            <DateButtonPlaceHolder place_holder_number={i} date={k}/>
        )
    }

    for(let i = 0; i < number_of_dates_in_month[month] + extra_day; i++)
    {
        dates_in_month.push(
            <DateButton date={i} />
        )
    }

    for(let i = number_of_place_holders_before_dates + number_of_dates_in_month[month] + extra_day, j = number_of_place_holders_before_dates, k = 1; i < total_number_of_dates; i++, j++, k++)
    {
        place_holder_after_dates.push(
            <DateButtonPlaceHolder place_holder_number={j} date={k}/>
        )
    }

    return (
        <div id='date_buttons' className='date_buttons' aria-label='date_buttons' data-test-id='date_buttons'>
            <GoToPreviousYearButton />
            <GoToPreviousMonthButton />
            <GoToMonthButton />
            <GoToYearButton />
            <GoToNextMonthButton />
            <GoToNextyearButton />
            {week_days_labels}
            {place_holder_before_dates}           
            {dates_in_month}
            {place_holder_after_dates}
        </div>
    );
}