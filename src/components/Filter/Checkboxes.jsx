import React from 'react';
import { connect } from 'react-redux';
import boxes from '../../data/checkboxes';
import { addSelectedCheckbox, removeSelectedCheckbox } from '../../actions';

function Checkboxes({ addSelectedCheckbox, removeSelectedCheckbox }) {

    const handleSelectBox = (e) => {
        const name = e.target.value;
        const value = e.target.checked;

        if (value) {
            addSelectedCheckbox(name);
        } else {
            removeSelectedCheckbox(name);
        }
    };

    return (
        <div className="filter-section-checkbox">
            {
                boxes.map(item => {
                    return (
                        <label key={item} className="label">{item}
                            <input
                                value={item}
                                onInput={e => handleSelectBox(e)} 
                                type="checkbox"
                            />
                            <span className="checkmark"></span>
                        </label> 
                    );
                })
            }
        </div>
    );
}

const mapDispatchToProps = { addSelectedCheckbox, removeSelectedCheckbox };


export default connect(null, mapDispatchToProps)(Checkboxes);