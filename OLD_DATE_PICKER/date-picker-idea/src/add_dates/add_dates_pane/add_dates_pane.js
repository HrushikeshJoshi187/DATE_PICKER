import React , { useState } from 'react';
import './add_dates_pane.css';
import CalenderDate from '../calender_date/calender_date';

function AddDatesPane(props) {
  const dates = []

  const [startDate , setStartDate] = useState(0);
  const [range , setRange] = useState(false);

  const select_range = (date) => {
    let list = [];
    if(range === false)
    {
      //console.log("start date : " + date);
      if(date !== 0)
      {
        setStartDate(date);
      }
      setRange(true);
    }
    else
    {
      //console.log("end date : " + date);
      if(startDate <= date)
      {
        //console.log("range possilble");
        for(let i = startDate; i <= date ;i++)
        {
          //console.log("selecting " + i);
          list.push(i);
        }
        props.select_dates(list);
        setStartDate(0);
      }
      else
      {
        //console.log("Range invalid");
      }
      setRange(false);
      setStartDate(0);
    }
  }

  for(let i = 1; i < 32; i++)
  {
    dates.push(
      <CalenderDate date={i} key={i} dates={props.dates} select_dates={props.select_dates} deselect_date={props.deselect_date} select_range={select_range} start_date={startDate}/>
    )
  }

  return (
    <div id="add_dates_pane">
      {dates}
    </div>
  );
}

export default AddDatesPane;