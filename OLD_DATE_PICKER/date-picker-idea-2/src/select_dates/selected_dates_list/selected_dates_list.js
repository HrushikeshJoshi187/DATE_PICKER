import './selected_dates_list.css';
import SelectedDateRecord from '../selected_date_record/selected_date_record';



function SelectedDateRecordsList(props) {
  const list = [];

  for(let i = 0; i < props.dates.length; i++)
  {
    list.push(<SelectedDateRecord date={props.dates[i]} key={props.dates[i]} deselect_date={props.deselect_date}/>)
  }

  return (
    <div id="selected_dates_list">
      {list}
    </div>
  );
}

export default SelectedDateRecordsList;