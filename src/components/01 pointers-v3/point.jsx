import React from 'react';
import './point.css';

function Pointer() {
    return (
      <div className="point-container">   
        <ul>
          <li className="point-item"><a className="point-link active" data-scroll-nav="11" href="#"></a></li>
          <li className="point-item"><a className="point-link" data-scroll-nav="12" href="#"></a></li>
          <li className="point-item"><a className="point-link" data-scroll-nav="13" href="#"></a></li>
          <li className="point-item"><a className="point-link" data-scroll-nav="14" href="#"></a></li>
          <li className="point-item-last"><a className="point-link" data-scroll-nav="6" href="#"></a></li>
        </ul>     
      </div>
    );
  }
  
  export default Pointer;