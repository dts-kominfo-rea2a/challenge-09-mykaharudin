// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import '../App.css';

const Contact = ({data}) => {
    return (
        <div className='contact'>
                <img alt={data.name} className='contact_image' src={data.photo}/>
            <div className='contact_content'>
                <h2 className='contact_titel'>{data.name}</h2>
                <h5 className='contact_phone'>{data.phone}</h5>
                <p className='contact_email'>{data.email}</p>
            </div>
        </div>
    )
}

export default Contact;