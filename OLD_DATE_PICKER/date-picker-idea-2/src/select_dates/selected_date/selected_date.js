import './selected_date.css';

function SelectedDate(props) {
    return (
        <div id="selected_date">
            {props.date + "/01/2000"}
        </div>
    );
}

export default SelectedDate;