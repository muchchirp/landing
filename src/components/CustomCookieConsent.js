// src/components/CustomCookieConsent.js
import React, { useState, useEffect } from 'react';
import * as styles from './CustomCookieConsent.css'; // Adjust the path to your .css.ts file

const CustomCookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Initialize visibility based on the cookie's presence
        const consentCookie = getCookie('customCookieConsent');
        if (!consentCookie) {
            setVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        setCookie('customCookieConsent', 'accepted', 365); // Set for 365 days
        setVisible(false);
        // Additional logic for accepting cookies
    };

    const rejectCookies = () => {
        setVisible(false);
        // Logic for rejecting cookies (optional)
    };

    // Utility function to set a cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    // Utility function to get a cookie value
    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    if (!visible) return null;

    return (
        <div className={styles.cookieConsentContainer}>
            <p className={styles.message}>We use cookies for a better browsing experience. <a href="/cookie-policy">Learn more</a></p>
            <div className={styles.buttons}>
                <button className={styles.acceptButton} onClick={acceptCookies}>Accept All</button>
                <button className={styles.rejectText} onClick={rejectCookies}>Reject All</button>
            </div>
        </div>
    );
};

export default CustomCookieConsent;
