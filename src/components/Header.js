// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import '../App.css';

const Header = () => {
    return (
        <>
        <div>
            <div className='header'>
                <h2>
                    Call a friend
                </h2>
                <h4>
                    Your friend contact app
                </h4>
            </div>
        </div>
        </>
    )
}

export default Header;