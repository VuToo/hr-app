import React from 'react';
import AtomicSpinner from 'atomic-spinner';
import "../assets/css/spinner.css";

function Spinner() {
    return (
    <>
        <div className='wrapper'>
            <AtomicSpinner
                electronPathCount="15"
                electronsPerPath="10"
            />
        </div>
    </>
    )
}

export default Spinner
