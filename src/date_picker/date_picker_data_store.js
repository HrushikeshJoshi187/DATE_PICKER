import React , { createContext, useContext, useReducer } from 'react';


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
    go_to_months_mode : false,
    go_to_years_mode : false,
    lower_bound: '',
    upper_bound: '',
    missing_dates: new Set(),
    first_day_of_week:0
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

        case 'go_to_months':
        {
            new_state = {...state}
            new_state.go_to_years_mode = false;
            new_state.go_to_months_mode = true;
            return new_state;
        }

        case 'go_to_month':
        {
            new_state = {...state}
            new_state.current_month = action.month;
            new_state.go_to_months_mode = false;
            return new_state;
        }

        case 'go_to_years':
        {
            new_state = {...state}
            new_state.go_to_months_mode = false;
            new_state.go_to_years_mode = true;
            return new_state;
        }

        case 'go_to_year':
        {
            new_state = {...state}
            if(action.year < new_state.current_year)
            {
                if(action.month < (new Date(new_state.lower_bound).getMonth()))
                {
                    new_state.current_month = (new Date(new_state.lower_bound).getMonth());
                }
                else
                {
                    new_state.current_month = action.month;
                }
            }
            if(action.year > new_state.current_year)
            {
                if(action.month > (new Date(new_state.upper_bound).getMonth()))
                {
                    new_state.current_month = (new Date(new_state.upper_bound).getMonth());
                }
                else
                {
                    new_state.current_month = action.month;
                }
            }
            new_state.current_year = action.year;
            
            new_state.go_to_years_mode = false;
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
            if(!new_state.missing_dates.has(action.clicked_date))
            {
                if(new_state.selected_dates.has(action.clicked_date))
                {
                    new_state.selected_dates.delete(action.clicked_date);
                }
                else
                {
                    new_state.selected_dates.add(action.clicked_date);
                }
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
                            if(!new_state.missing_dates.has(i.toISOString().split('T')[0]))
                            {
                                new_state.selected_dates.add(i.toISOString().split('T')[0]);
                            }
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

export default function DatePickerDataStore(props)
{
    date_picker_data_initial_state.lower_bound = props.lower_bound;
    date_picker_data_initial_state.upper_bound = props.upper_bound;
    date_picker_data_initial_state.missing_dates = new Set(props.missing_dates);
    date_picker_data_initial_state.first_day_of_week = props.first_day_of_week;

    let upper_bound = new Date(props.upper_bound)
    upper_bound = new Date(upper_bound.getFullYear(), upper_bound.getMonth(), upper_bound.getDate());
    let lower_bound = new Date(props.lower_bound)
    lower_bound = new Date(lower_bound.getFullYear(), lower_bound.getMonth(), lower_bound.getDate());

    if(props.upper_bound !== '')
    {
        if(upper_bound < today_s_date)
        {
            date_picker_data_initial_state.current_year = upper_bound.getFullYear();
            date_picker_data_initial_state.current_month = upper_bound.getMonth();
            date_picker_data_initial_state.current_date = upper_bound.getDate();
        }
    }

    if(props.lower_bound !== '')
    {
        if(lower_bound > today_s_date)
        {
            date_picker_data_initial_state.current_year = lower_bound.getFullYear();
            date_picker_data_initial_state.current_month = lower_bound.getMonth();
            date_picker_data_initial_state.current_date = lower_bound.getDate();
        }
    }

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

