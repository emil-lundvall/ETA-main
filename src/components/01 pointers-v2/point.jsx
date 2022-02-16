import React from 'react';
import './point.css';

function Pointer() {
    return (
      <div className="point-container">   
        <ul>
          <li className="point-item"><a className="point-link active" data-scroll-nav="7" href="#"></a></li>
          <li className="point-item"><a className="point-link" data-scroll-nav="8" href="#"></a></li>
          <li className="point-item"><a className="point-link" data-scroll-nav="9" href="#"></a></li>
          <li className="point-item"><a className="point-link" data-scroll-nav="10" href="#"></a></li>
          <li className="point-item-last"><a className="point-link" data-scroll-nav="6" href="#"></a></li>
        </ul>     
      </div>
    );
  }
  
  export default Pointer;