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
        <DatePicker lower_bound='2015-07-14' upper_bound='2035-06-27' missing_dates={['2023-01-10','2023-01-20','2023-01-21','2023-01-22','2023-01-24']} first_day_of_week={0} only_select_a_date={false} styling={
            {
              not_selected_background_color: 'hsla(0, 100%, 100%, 1)',
              not_selected_color: 'hsla(0, 100%, 0%, 1)',

              to_be_selected_background_color: 'hsla(232, 100%, 65%, 1)',
              to_be_selected_color: 'hsla(0, 100%, 100%, 1)',
            
              selected_background_color: 'hsla(231, 100%, 47%, 1)',
              selected_color: 'hsla(0, 100%, 100%, 1)',
            
              disabled_background_color: 'hsla(0, 100%, 100%, 1)',
              disabled_color: 'hsla(0, 0%, 80%, 1)',
            
              label_background_color: 'hsla(0, 100%, 100%, 1)',
              label_color: 'hsla(0, 100%, 0%, 1)',
            
              tooltip_background_color: 'hsla(0, 0%, 50%, 1)',
              tooltip_color: 'hsla(0, 100%, 100%, 1)',
            }
          }/>
      </AppDataProvider>
    </div>
  );
}