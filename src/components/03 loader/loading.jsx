import React from 'react';
import './../../App.css';
import '../../scroll-it/scrollIt.js';
import './loading.css';

const loading = () => {
    return (
    <div>
        <div className="loader-wrapper">
            <span className="loader"><span className="loader-inner"></span></span>
        </div>
    </div>
    )
}

export default loading