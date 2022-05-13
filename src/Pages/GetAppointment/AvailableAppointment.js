import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointment = ({date}) => {
    const [services , setServices] = useState([])
     
    useEffect( ()=>{
        fetch()
        .then(res => res.json())
        .then(info => setServices(info))
    },[])
    return (
        <div>
            <h1>Available Appointment: {format(date, 'PP')}</h1>
        </div>
    );
};

export default AvailableAppointment;