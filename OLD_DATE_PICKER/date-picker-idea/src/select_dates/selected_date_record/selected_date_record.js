import './selected_date_record.css';
import SelectedDateCancelButton from '../selected_date_cancel_button/selected_date_cancel_button';
import SelectedDate from '../selected_date/selected_date';


function SelectedDateRecord(props) {
  return (
    <div id="selected_date_record">
      <SelectedDate date={props.date}/>
      <SelectedDateCancelButton date={props.date} deselect_date={props.deselect_date}/>
    </div>
  );
}

export default SelectedDateRecord;