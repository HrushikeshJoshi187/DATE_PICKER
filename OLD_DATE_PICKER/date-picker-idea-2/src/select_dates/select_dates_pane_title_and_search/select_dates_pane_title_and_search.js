import './select_dates_pane_title_and_search.css';
import SelectDatesPaneTitle from '../select_dates_pane_title/select_dates_pane_title'; 
import SelectDatesPaneSearch from '../select_dates_pane_search/select_dates_pane_search';

function SelectDatesPaneTitleAndSearch() {
  return (
    <div id="select_dates_pane_title_and_search">
      <SelectDatesPaneTitle/>
      <SelectDatesPaneSearch/>
    </div>
  );
}

export default SelectDatesPaneTitleAndSearch;