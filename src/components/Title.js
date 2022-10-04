import React, { useState } from 'react';
import './Title.css';

function Title() {
    return (
        <div className="header">
            <div className="header_Title">
                <label>Your Hotel</label>
                <label id='text'>
                    실제 후기들 기반의 호텔 추천
                </label>
            </div>
        </div>
    )
}

export default Title