import React, {useState} from "react";
import {Form} from "../../components";
import useAsync from "../../hooks/useAsync";
import {useSelector} from "react-redux";
import {ArrayElementsType} from "../AddBooking/AddBooking";
import {BsCheckLg} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";


const CheckRoom = () => {
    const selector = useSelector((state: any) => state.bookings);
    const [isAvailable, setAvailable] = useState<boolean | null>(null)
    const AsyncFunction = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (selector.length > 0) {
                    resolve(selector)
                } else {
                    reject("Oh no there was an error 😞");
                }
            }, 4000);
        });
    };

    const {status, value} = useAsync(AsyncFunction);


    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps: any = Object.fromEntries(formData);
        const {room, date} = formProps;
        const bookDate = new Date(date).getTime();
        setAvailable(!selector.some((d: ArrayElementsType) => d?.date === bookDate && d?.room === room))
    }
    return (
        <>
            <h2>Check Room</h2>
            <Form path={"check-room"} handleFormSubmit={handleSubmit} submitValue={"Check"}/>
            <div className="available_message" style={isAvailable === null ? {display: "none"} : {}}>
                {isAvailable ? <p>This room is available <BsCheckLg size={22}/></p> :
                    <p> This room is not available <AiOutlineClose style={{color: "#FFFFFF"}} size={22}/></p>}
            </div>
        </>
    )
}

export default CheckRoom;