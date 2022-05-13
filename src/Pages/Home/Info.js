import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'



const Info = () => {
    return (
        <div className='grid grid-cols-3 gap-4 px-12'>
            <InfoCard title='Opening Hour' back='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
            <InfoCard title='Visit Our Location'back='bg-accent' img={marker}></InfoCard>
            <InfoCard title='Contact With Us'back='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard>
        </div>
    );
};

export default Info;