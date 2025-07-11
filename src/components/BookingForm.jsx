import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import '../styles/BookingForm.scss';
import { getGeolocationData } from '../utils/geolocation';

const schema = yup.object().shape( {
    name: yup.string().required( 'Name is required' ),
    email: yup.string().email().required( 'Email is required' ),
    date: yup.string().required( 'Date is required' ),
    time: yup.string().required( 'Time is required' ),
    guests: yup.number().required().min( 1, 'Minimum 1 guest' ),
    city: yup.string().required( 'City is required' ),
    postalCode: yup.string().required( 'Postal code is required' ),
} );

const BookingForm = ( { onSubmit } ) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm( {
        resolver: yupResolver( schema ),
    } );

    // Autofill location using geolocation
    useEffect( () => {
        getGeolocationData()
            .then( ( { city, postalCode } ) => {
                if ( city ) setValue( 'city', city );
                if ( postalCode ) setValue( 'postalCode', postalCode );
            } )
            .catch( ( err ) => {
                console.warn( 'Geolocation error:', err );
            } );
    }, [setValue] );


    return (
        <form onSubmit={handleSubmit( onSubmit )} aria-label="Booking Form" className="booking-form">
            <h2>Book a Table</h2>

            <label htmlFor="name">Name</label>
            <input id="name" {...register( 'name' )} aria-invalid={!!errors.name} />
            <p>{errors.name?.message}</p>

            <label htmlFor="email">Email</label>
            <input id="email" {...register( 'email' )} aria-invalid={!!errors.email} />
            <p>{errors.email?.message}</p>

            <label htmlFor="date">Date</label>
            <input id="date" type="date" {...register( 'date' )} />
            <p>{errors.date?.message}</p>

            <label htmlFor="time">Time</label>
            <input id="time" type="time" {...register( 'time' )} />
            <p>{errors.time?.message}</p>

            <label htmlFor="guests">Number of Guests</label>
            <input id="guests" type="number" {...register( 'guests' )} />
            <p>{errors.guests?.message}</p>

            <label htmlFor="city">City</label>
            <input id="city" {...register( 'city' )} />
            <p>{errors.city?.message}</p>

            <label htmlFor="postalCode">Postal Code</label>
            <input id="postalCode" {...register( 'postalCode' )} />
            <p>{errors.postalCode?.message}</p>

            <button type="submit">Reserve</button>
        </form>
    );
};

export default BookingForm;
