import './select_dates_pane_search.css';

function SelectDatesPaneSearch() {
  return (
    <div id="select_dates_pane_search">
        <input id="select_dates_pane_search_input" type="text" placeholder="DD/MM/YYYY" pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"/>
    </div>
  );
}

export default SelectDatesPaneSearch;