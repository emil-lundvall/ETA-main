import React from 'react';
import './point.css';

function Pointer() {
    return (
<div className="point-container">   
<ul>
  <li className="point-item"><a className="point-link active" data-scroll-nav="0" href="#"></a></li>
  <li className="point-item"><a className="point-link" data-scroll-nav="1" href="#"></a></li>
  <li className="point-item"><a className="point-link" data-scroll-nav="2" href="#"></a></li>
  <li className="point-item"><a className="point-link" data-scroll-nav="3" href="#"></a></li>
  <li className="point-item"><a className="point-link" data-scroll-nav="4" href="#"></a></li>
  <li className="point-item"><a className="point-link" data-scroll-nav="5" href="#"></a></li>
  <li className="point-item-last"><a className="point-link" data-scroll-nav="6" href="#"></a></li>
</ul>     
</div>
    );
  }
  
  export default Pointer;