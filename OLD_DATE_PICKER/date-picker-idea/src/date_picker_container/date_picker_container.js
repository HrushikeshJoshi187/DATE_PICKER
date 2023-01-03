import React , { useState } from 'react';
import './date_picker_container.css';
import SelectDatesPane from '../select_dates/select_dates_pane/select_dates_pane';
import AddDatesPane from '../add_dates/add_dates_pane/add_dates_pane';

function DatePickerContainer() {

  const [selectedDates, setSelectedDates] = useState([]);


  const select_dates = (add_dates) =>
  {
    add_dates = add_dates.filter((value) => {
      return !selectedDates.includes(value);
    })
    const updated_date_list = [...selectedDates, ...add_dates ];
    //console.log("adding : " + updated_date_list);
    setSelectedDates(updated_date_list);
  }

  const deselect_date = (remove_date) =>
  {
    const updated_date_list = ([...selectedDates]).filter((value)=>{
      return value !== remove_date;
    });
    //console.log("removing : " + updated_date_list);
    setSelectedDates(updated_date_list);
  }

  return (
    <div id="date_picker_container">
       <SelectDatesPane dates={selectedDates} deselect_date={deselect_date}/>
       <AddDatesPane dates={selectedDates} select_dates={select_dates} deselect_date={deselect_date}/>
    </div>
  );
}

export default DatePickerContainer;