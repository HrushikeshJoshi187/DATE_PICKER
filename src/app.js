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
        <DatePicker lower_bound='' upper_bound='' missing_dates='' first_day_of_week={6}/>
      </AppDataProvider>
    </div>
  );
}