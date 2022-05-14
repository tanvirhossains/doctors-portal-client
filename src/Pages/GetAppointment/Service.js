import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service

    return (
        <div class="card bg-base-100 lg:max-w-lg grid md:grid-cols-1 justify-items-center  shadow-xl">
            <div class="card-body  ">
                <h2 class="card-title text-secondary text-center">{name}</h2>
                <p >{slots.length ?
                    <span className='text-center'>{slots[0]}</span> :
                    <h2 className='text-red-600'>No slot Available</h2>
                }</p>
                <h1> {slots.length} {slots.length < 1 ? "space" :
                    'spaces'}
                    <span> available</span></h1>
                <div class="card-actions justify-center ">

                    <label for="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length == 0}
                        class="btn modal-button btn-secondary text-white font-bold"
                    >Booking Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;