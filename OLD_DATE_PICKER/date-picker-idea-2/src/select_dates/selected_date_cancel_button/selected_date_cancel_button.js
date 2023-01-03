import './selected_date_cancel_button.css';

function SelectedDateCancelButton(props) {
    const cancel_selection = () => {
        props.deselect_date(props.date);
    }

    return (
        <button id="selected_date_cancel_button" type="button" onClick={cancel_selection}>X</button>
    );
}

export default SelectedDateCancelButton;