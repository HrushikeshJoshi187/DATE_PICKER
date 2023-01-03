import './select_dates_pane.css';
import SelectedDatesList from '../selected_dates_list/selected_dates_list';
import SelectDatesPaneTitleAndSearch from '../select_dates_pane_title_and_search/select_dates_pane_title_and_search';
import SelectDatesPaneActions from '../select_dates_pane_actions/select_dates_pane_actions';


function SelectDatesPane(props) {
  return (
    <div id="select_dates_pane">
      <SelectDatesPaneTitleAndSearch/>
      <SelectedDatesList dates={props.dates} deselect_date={props.deselect_date}/>
      <SelectDatesPaneActions/>
    </div>
  );
}

export default SelectDatesPane;