import React from 'react';
import './point.css';

function Pointer() {
    return (
      <div className="point-container">   
        <ul>
          <li className="point-item"><a className="point-link active" data-scroll-nav="16" href="#"></a></li>
          <li className="point-item"><a className="point-link" data-scroll-nav="17" href="#"></a></li>
          <li className="point-item"><a className="point-link" data-scroll-nav="18" href="#"></a></li>
          <li className="point-item"><a className="point-link" data-scroll-nav="19" href="#"></a></li>
          <li className="point-item"><a className="point-link" data-scroll-nav="20" href="#"></a></li>
          <li className="point-item-last"><a className="point-link" data-scroll-nav="6" href="#"></a></li>
        </ul>     
      </div>
    );
  }
  
  export default Pointer;