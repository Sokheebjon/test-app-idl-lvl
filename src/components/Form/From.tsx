import React, {FC, SyntheticEvent} from "react";

type FormProps = {
    handleFormSubmit: (e: SyntheticEvent) => void;
    path: "add-booking" | "check-room";
    submitValue: "Add" | "Check";
}

const Form: FC<FormProps> = ({handleFormSubmit, path, submitValue}) => {
    return (
        <form className="form" onSubmit={handleFormSubmit}>
            {path === "add-booking" && <div className="input_container">
                <label htmlFor="surname">Surname</label>
                <input type="text" id="surname" name="surname" placeholder="Surname"/>
            </div>}
            <div className="input_container">
                <label htmlFor="room">Room</label>
                <select name="room" id="room" placeholder="Select Room">
                    <option value="101">101</option>
                    <option value="102">102</option>
                    <option value="201">201</option>
                    <option value="202">202</option>
                </select>
            </div>
            <div className="input_container">
                <label htmlFor="date">Date</label>
                <input type="date" name="date" placeholder="Pick a Date"/>
            </div>
            <div className="input_container submit_button">
                <input type="submit" value={submitValue}/>
            </div>
        </form>
    )
}
export default Form;