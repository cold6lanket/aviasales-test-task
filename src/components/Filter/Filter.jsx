import React from 'react';
import Checkboxes from './Checkboxes';
import './Filter.css';

function Filter() {


    return (
        <div className="filter-section">
            <div className="filter-section-title">
                КОЛИЧЕСТВО ПЕРЕСАДОК
            </div>

            <Checkboxes />
        </div>
    );
}


export default Filter;