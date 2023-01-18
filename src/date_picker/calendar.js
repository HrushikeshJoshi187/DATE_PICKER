import React, { useEffect } from 'react';

import './calendar.css';

import DateButton from './date_button.js';
import DateButtonPlaceHolder from './date_button_place_holder.js';
import DayLabel from './day_label.js';
import GoToPreviousYearButton from './go_to_previous_year_button.js';
import GoToPreviousMonthButton from './go_to_previous_month_button.js';
import GoToMonthsButton from './go_to_months_button.js';
import GoToYearsButton from './go_to_years_button.js';
import GoToNextMonthButton from './go_to_next_month_button.js';
import GoToNextyearButton from './go_to_next_year_button.js';
import MonthButton from './month_button.js';
import YearButton from './year_button.js';
import { get_date_picker_data_state } from './date_picker_data_store.js';
import { get_app_data_dispatcher } from '.././app_data_provider.js';


let number_of_dates_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


export default function Calendar()
{
    const state = {...get_date_picker_data_state()};
    const dispatcher = get_app_data_dispatcher();
    dispatcher({type:'update_selected_dates',selected_dates: new Set(state.selected_dates)});

    let week_days_labels= [];
    let number_of_days_in_a_week = 7;
    let place_holder_before_dates = [];
    let place_holder_after_dates = [];
    let dates_in_month = [];
    let extra_day = 0;
    let total_number_of_dates = 42;
    let total_number_of_months = 12;
    let months_in_year = [];
    let tota_number_years_in_a_decade = 10;
    let years_in_decade = [];

    let first_day = (new Date(state.current_year, state.current_month , 1)).getDay();
    let number_of_place_holders_before_dates = first_day - state.first_day_of_week;
    
    extra_day = ((state.current_month === 1) && (state.current_year % 100 === 0 ? state.current_year % 400 === 0 : state.current_year % 4 === 0)) ? 1 : 0;

    for(let i = 0; i < number_of_days_in_a_week; i++)
    {
        week_days_labels.push(
            <DayLabel key={i} label_number={i} />
        )
    }

    for(let i = 0, k = (state.current_month === 0 ? 31 : number_of_dates_in_month[state.current_month - 1]) - number_of_place_holders_before_dates + 1; i < number_of_place_holders_before_dates; i++, k++)
    {
        place_holder_before_dates.push(
            <DateButtonPlaceHolder key={i} place_holder_number={i} date={k} />
        )
    }

    for(let i = 0; i < number_of_dates_in_month[state.current_month] + extra_day; i++)
    {
        dates_in_month.push(
            <DateButton key={i} date={i + 1} month={state.current_month} year={state.current_year}/>
        )
    }

    for(let i = number_of_place_holders_before_dates + number_of_dates_in_month[state.current_month] + extra_day, j = number_of_place_holders_before_dates, k = 1; i < total_number_of_dates; i++, j++, k++)
    {
        place_holder_after_dates.push(
            <DateButtonPlaceHolder key={j} place_holder_number={j} date={k} />
        )
    }

    for(let i = 0; i < total_number_of_months; i++)
    {
        months_in_year.push(
            <MonthButton key={i} month={i} year={state.current_year}/>
        )
    }

    for(let i = 0, j = state.current_year - 5; i < tota_number_years_in_a_decade; i++, j++)
    {
        years_in_decade.push(
            <YearButton key={i} month={state.current_month} year={j} />
        )
    }

    useEffect(() => {
        console.log('calendar updated');
        // const dispatcher = get_app_data_dispatcher();
        // dispatcher({type:'update_selected_dates',selected_dates: new Set(state.selected_dates)});
    });

    return (
        <div id='calendar' className='calendar' aria-label='calendar' data-test-id='calendar'>
            {(!state.go_to_months_mode) && (!state.go_to_years_mode) &&
                <>
                    <GoToPreviousYearButton />
                    <GoToPreviousMonthButton />
                    <GoToMonthsButton />
                    <GoToYearsButton />
                    <GoToNextMonthButton />
                    <GoToNextyearButton />
                    {week_days_labels}
                    {place_holder_before_dates}         
                    {dates_in_month}
                    {place_holder_after_dates}
                </>
            }
            {state.go_to_months_mode &&
                <>
                    {months_in_year}
                </>
            }
            {state.go_to_years_mode &&
                <>
                    {years_in_decade}
                </>
            }
        </div>
    );
}