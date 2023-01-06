import React , { createContext, useContext, useReducer, useState } from 'react';


const PresentDateContext = createContext(null);
const CurrentDateContext = createContext(null);


export default function DatePickerDataProvider(props)
{
    let today_s_date = new Date();
    today_s_date = new Date(today_s_date.getFullYear(), today_s_date.getMonth(), today_s_date.getDate());

    const [present_date, set_present_date] = useState({year: today_s_date.getFullYear(), month: today_s_date.getMonth(), date: today_s_date.getDate()});

    const [current_date, set_current_date] = useState({year: today_s_date.getFullYear(), month: today_s_date.getMonth(), date: today_s_date.getDate()});

    return (
        <PresentDateContext.Provider value={{present_date, set_present_date}}>
            <CurrentDateContext.Provider value={{current_date, set_current_date}}>
                {props.children}
            </CurrentDateContext.Provider>
        </PresentDateContext.Provider>
    );
}

export function get_present_date()
{
    return useContext(PresentDateContext);
}

export function get_current_date()
{
    return useContext(CurrentDateContext);
}

