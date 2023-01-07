import React , { createContext, useContext, useReducer, useState } from 'react';


let today_s_date = new Date();
today_s_date = new Date(today_s_date.getFullYear(), today_s_date.getMonth(), today_s_date.getDate());

const DatePickerDataStateContext = createContext(null);
const DatePickerDataDispatcherContext = createContext(null);

const date_picker_data_initial_state = 
{
    present_date: today_s_date.getDate(),
    present_month: today_s_date.getMonth(),
    present_year: today_s_date.getFullYear(),
    current_date: today_s_date.getDate(),
    current_month: today_s_date.getMonth(),
    current_year: today_s_date.getFullYear(),
    selected_dates: new Set(),
    range_start: '',
    go_to_month_mode : false,
    go_to_year_mode : false,
    lower_bound: '',
    upper_bound: ''
};

function date_picker_data_reducer(state, action)
{
    let new_state = {}
    switch(action.type)
    {
        case 'go_to_previous_year':
        {
            new_state = {...state}
            new_state.current_year = new_state.current_year - 1;
            return new_state;
        }

        case 'go_to_previous_month':
        {
            new_state = {...state}
            if(new_state.current_month - 1 === -1)
            {
                new_state.current_month = 11;
                new_state.current_year -= 1;
            }
            else
            {
                new_state.current_month -= 1
            }
            return new_state;
        }

        case 'go_to_month':
        {
            new_state = {...state}
            if(new_state.go_to_year_mode === true)
            {
                new_state.go_to_year_mode = false;
            }
            if(new_state.go_to_month_mode === true)
            {
                new_state.go_to_month_mode = false;
            }
            else
            {
                new_state.go_to_month_mode = true;
            }
            return new_state;
        }

        case 'go_to_year':
        {
            new_state = {...state}
            if(new_state.go_to_month_mode === true)
            {
                new_state.go_to_month_mode = false;
            }
            if(new_state.go_to_year_mode === true)
            {
                new_state.go_to_year_mode = false;
            }
            else
            {
                new_state.go_to_year_mode = true;
            }
            return new_state;
        }

        case 'go_to_next_month':
        {
            new_state = {...state}
            if(new_state.current_month + 1 === 12)
            {
                new_state.current_month = 0;
                new_state.current_year += 1;
            }
            else
            {
                new_state.current_month += 1
            }
            return new_state;
        }

        case 'go_to_next_year':
        {
            new_state = {...state}
            new_state.current_year = new_state.current_year + 1;
            return new_state;
        }

        case 'check_date':
        {
            new_state = {...state}
            if(new_state.range_start !== '')
            {
                new_state.range_start = '';
            }
            if(new_state.selected_dates.has(action.clicked_date))
            {
                new_state.selected_dates.delete(action.clicked_date);
            }
            else
            {
                new_state.selected_dates.add(action.clicked_date);
            }
            return new_state;
        }

        case 'check_range':
        {
            new_state = {...state}
            if(new_state.range_start === '')
            {
                new_state.range_start = action.clicked_date;
            }
            else
            {
                if(new_state.range_start === action.clicked_date)
                {
                    new_state.range_start = '';
                    if(new_state.selected_dates.has(action.clicked_date))
                    {
                        new_state.selected_dates.delete(action.clicked_date);
                    }
                    else
                    {
                        new_state.selected_dates.add(action.clicked_date);
                    }
                }
                else
                {
                    if(new Date(new_state.range_start) < new Date(action.clicked_date))
                    {
                       for(let i = new Date(new_state.range_start); i <= new Date(action.clicked_date); i.setDate(i.getDate() + 1))
                       {
                            new_state.selected_dates.add(i.toISOString().split('T')[0]);
                       } 
                       new_state.range_start = '';
                    }   
                    else
                    {
                        new_state.range_start = action.clicked_date;
                    }
                }
            }
            return new_state;
        }

        default:
            console.log('Data action not found !');
    }
}

export default function DatePickerDataProvider(props)
{
    date_picker_data_initial_state.lower_bound = props.lower_bound;
    date_picker_data_initial_state.upper_bound = props.upper_bound;


    const [date_picker_data_state, date_picker_data_dispatcher] = useReducer(
        date_picker_data_reducer,
        date_picker_data_initial_state
    );

    return (
        <DatePickerDataStateContext.Provider value={date_picker_data_state}>
            <DatePickerDataDispatcherContext.Provider value={date_picker_data_dispatcher}>
                {props.children}
            </DatePickerDataDispatcherContext.Provider>
        </DatePickerDataStateContext.Provider>
    );
}

export function get_date_picker_data_state()
{
    return useContext(DatePickerDataStateContext);
}

export function get_date_picker_data_dispatcher()
{
    return useContext(DatePickerDataDispatcherContext);
}

