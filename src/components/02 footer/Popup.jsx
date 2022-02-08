import React from 'react';
import sentMail from "../../icons/lordicon/sent-mail.gif"

const Popup = ({ showPopup, setShowPopup }) => {
    const closePopup = () => {
        setShowPopup(false);
    }

    return (
        <div className={`popup-wrapper ${!showPopup ? "hidden" : "visible"}`} onClick={closePopup}>
            <div className="popup-container">
                <img className="popup-icon" src={sentMail}></img>
                <h1 className="popup-title">Your message has been successfully sent.</h1>
            </div>
        </div>
    )
}

export default Popup;