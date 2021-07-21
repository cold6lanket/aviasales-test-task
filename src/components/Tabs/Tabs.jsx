import React from 'react';
import { connect } from 'react-redux';
import { onTabSelect } from '../../actions';
import tabElements from '../../data/tabElements';
import './Tabs.css';

function Tabs({ tabs, onTabSelect }) {

    return (
        <ul className="tabs">
            {tabElements.map(elem => {
                const { id } = elem;
                const active = tabs === id;

                return (
                    <li 
                        key={`${id}`} 
                        className={`tab ${active ? "__is-active" : ""}`}
                        onClick={() => onTabSelect(id)}
                    >
                        {elem.name.toUpperCase()}
                    </li>
                );
            })}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        tabs: state.tabs
    };
};

const mapDispatchToProps = { onTabSelect };

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);