// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import '../App.css';

const Contact = (prop) => {
    return (
        <>
        <div className='item'>
            <div className='aside'>
                <img src={prop.data.photo} alt={prop.data.name} className='image'></img>
            </div>
            <div className='section'>
                <div className='nama'>{prop.data.name}</div>
                <div className='phone-email'>{prop.data.phone}<br></br>
                {prop.data.email}
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;