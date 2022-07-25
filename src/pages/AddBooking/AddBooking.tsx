import React, {useEffect, useState} from "react";
import {Form} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import useAsync from "../../hooks/useAsync";
import toast from "react-hot-toast";

export interface ArrayElementsType {
    surname?: string;
    room?: number;
    date: string | number;
}


const AddBooking = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state: any) => state.bookings);

    const isExistSurname = (data: ArrayElementsType) => {
        return selector?.some((d: ArrayElementsType) => d?.surname === data?.surname)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps: any = Object.fromEntries(formData);
        if (!isExistSurname(formProps)) {
            dispatch({type: "ADD_BOOKING", payload: {...formProps, date: new Date(formProps.date).getTime()}})
            toast.success("Booked successfully")
        } else {
            toast.error("This surname is already registered !")
        }
    }

    return (
        <>
            <h2>Add Booking</h2>
            <Form path={"add-booking"} handleFormSubmit={handleSubmit} submitValue={"Add"}/>
        </>
    )
}

export default AddBooking;