import React from 'react';
import AtomicSpinner from 'atomic-spinner';
import "../assets/css/spinner.css";

function SpinnerS() {
    return (
    <>
        <div className='wrapper-s'>
            <AtomicSpinner
                electronPathCount = {15}
                electronsPerPath= {10}
                atomSize = {150}
                displayElectronPaths = {false}
                displayNucleus = {false}
                electronSpeed = {0.3}
            />
        </div>
    </>
    )
}

export default SpinnerS
