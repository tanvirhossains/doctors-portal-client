import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date , setTreatment }) => {
    const { name, slots } = treatment


    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value

        console.log(slot)
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box ">
                    <h3 class="font-bold text-secondary text-lg">Booking : {name} </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" value={format(date, 'PP')} class="input input-bordered m-4 w-full max-w-xs" />
                        {/* <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot =><option value={slot}>{slot}</option>)
                            }
                        </select> */}
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered m-4 w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Your Email" class="input input-bordered m-4 w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Your Phone" class="input input-bordered m-4 w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form >


                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div class="modal-action">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;