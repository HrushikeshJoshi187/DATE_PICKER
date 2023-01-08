import React from 'react';

import './bar_chart.css';

import { get_app_data_state } from './app_data_provider.js';


export default function BarChart()
{
    let columns_in_the_chart = [];
    let data = []; 
    let number_of_columns_in_chart = 40;
    let number_of_missing_dates = 5;
    let missing_dates = new Set(['2023-01-10','2023-01-20','2023-01-21','2023-01-22','2023-01-24']);
    const state = {...get_app_data_state()};

    const date = new Date(2022, 11, 15);
    /*
    for(let i = 0; i < number_of_columns_in_chart + number_of_missing_dates; i++,  date.setDate(date.getDate() + 1))
    {
        data.push({date: date.toISOString().split('T')[0], sales: (Math.floor(Math.random() * 100) + 1)})
    }
    */
    data = [{"date":"2022-12-14","sales":99},{"date":"2022-12-15","sales":94},{"date":"2022-12-16","sales":95},{"date":"2022-12-17","sales":55},{"date":"2022-12-18","sales":15},{"date":"2022-12-19","sales":54},{"date":"2022-12-20","sales":85},{"date":"2022-12-21","sales":9},{"date":"2022-12-22","sales":38},{"date":"2022-12-23","sales":79},{"date":"2022-12-24","sales":96},{"date":"2022-12-25","sales":27},{"date":"2022-12-26","sales":79},{"date":"2022-12-27","sales":45},{"date":"2022-12-28","sales":16},{"date":"2022-12-29","sales":6},{"date":"2022-12-30","sales":35},{"date":"2022-12-31","sales":40},{"date":"2023-01-01","sales":28},{"date":"2023-01-02","sales":35},{"date":"2023-01-03","sales":83},{"date":"2023-01-04","sales":35},{"date":"2023-01-05","sales":42},{"date":"2023-01-06","sales":68},{"date":"2023-01-07","sales":93},{"date":"2023-01-08","sales":96},{"date":"2023-01-09","sales":30},{"date":"2023-01-10","sales":11},{"date":"2023-01-11","sales":50},{"date":"2023-01-12","sales":78},{"date":"2023-01-13","sales":33},{"date":"2023-01-14","sales":84},{"date":"2023-01-15","sales":37},{"date":"2023-01-16","sales":1},{"date":"2023-01-17","sales":66},{"date":"2023-01-18","sales":19},{"date":"2023-01-19","sales":43},{"date":"2023-01-20","sales":54},{"date":"2023-01-21","sales":15},{"date":"2023-01-22","sales":50},{"date":"2023-01-23","sales":84},{"date":"2023-01-24","sales":70},{"date":"2023-01-25","sales":25},{"date":"2023-01-26","sales":70},{"date":"2023-01-27","sales":69}]

    console.log(JSON.stringify(data));

    for(let i = 0, j = 0; i < number_of_columns_in_chart + number_of_missing_dates; i++)
    {
        if(!missing_dates.has(data[i].date))
        {

            columns_in_the_chart.push(
                <span   id={`column_${data[i].date}`} className={`column ${state.selected_dates.has(data[i].date) ? 'column_selected' : ''}`} aria-label={`column_${data[i].date}`} data-test-id={`column_${data[i].date}`} style={
                    {
                        height: `${data[i].sales}%`, 
                        left: `${(800 / number_of_columns_in_chart) * j}px`,
                        bottom: `0px`
                    }
                }></span>
            );
            j++;
        }
    }

    return (
        <div id='bar_chart' className='bar_chart' aria-label='bar_chart' data-test-id='bar_chart'>
            <span  id='y_axis' className='y_axis' aria-label='y_axis' data-test-id='y_axis'></span>
            <span  id='x_axis' className='x_axis' aria-label='x_axis' data-test-id='x_axis'></span>
            <div  id='columns' className='columns' aria-label='columns' data-test-id='columns'>
                {columns_in_the_chart}
            </div>
        </div>
    );
}