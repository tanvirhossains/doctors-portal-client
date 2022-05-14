import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(info => setServices(info))
    }, [])
    return (
        <div>
            <h1 className='text-center text-primary font-bold text-2xl my-9'>Available Appointment: {format(date, 'PP')}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10'>
                {
                    services.map(service => <Service
                        setTreatment={setTreatment}
                        key={service._id}
                        service={service}></Service>)
                }
            </div>
            <div>
                { treatment && <BookingModal setTreatment={setTreatment} date={date} treatment={treatment} ></BookingModal>

                }

            </div>
        </div>
    );
};

export default AvailableAppointment;