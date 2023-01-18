import React from 'react';

import './app.css';

import AppDataProvider from './app_data_provider.js';
import DatePicker from './date_picker/date_picker.js';
import BarChart from './bar_chart/bar_chart.js';


export default function App()
{
  return (
    <div id='app' className='app' aria-label='app' data-test-id='app'>
      <AppDataProvider>
        {false &&
          <BarChart />
        }
        <DatePicker lower_bound='2015-07-14' upper_bound='2035-06-27' missing_dates={['2023-01-10','2023-01-20','2023-01-21','2023-01-22','2023-01-24']} first_day_of_week={0}/>
      </AppDataProvider>
    </div>
  );
}