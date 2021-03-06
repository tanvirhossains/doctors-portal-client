import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, 'PP')


    const { isLoading, refetch, data:services } = useQuery('repoData', () =>
    fetch(`https://vast-temple-90550.herokuapp.com/available?date=${formattedDate}`).then(res =>
      res.json()
    )
  )

  if (isLoading) return <Loading></Loading>

      // useEffect(() => {
    //     fetch(`https://vast-temple-90550.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])



    return (
        <div>
            <h1 className='text-center text-primary font-bold text-2xl my-9'>Available Appointment: {format(date, 'PP')}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}></Service>)
                }
            </div>
            <div>
                {treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch} ></BookingModal>

                }

            </div>
        </div>
    );
};

export default AvailableAppointment;