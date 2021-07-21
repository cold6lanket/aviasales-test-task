import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Spinner from '../Spinner/Spinner.jsx';
import { showSelectedCheckboxes } from './helpers';
import { ticketLoaded } from '../../actions/index.js';
import { fetchData } from '../../services/index.js';

import './Tickets.css';
import Ticket from './Ticket/Ticket';

function Tickets({ tickets, loading, ticketLoaded}) {
    useEffect(() => {
        const getData = async () => {
            const data = await fetchData();
            const filtered = data.filter(item => item.carrier === 'S7');

            return ticketLoaded(filtered);
        };

        getData();

    }, [ticketLoaded]);

    if (loading) return <Spinner/>;

    const elements = tickets.map(item => <Ticket key={`${item.price}`} item={item} />);

    return (
        <>
            {elements}
        </>
    );
}


const mapStateToProps = (state) => {
    const tickets = [...state.tickets];


    if (state.tabs === 'fast') {
        tickets.sort((a, b) => a.segments[0].duration > b.segments[0].duration ? 1 : -1);
    } else {
        tickets.sort((a, b) => a.price > b.price ? 1 : -1);
    }

    return {
        tickets: showSelectedCheckboxes(state.selectedCheckbox, tickets),
        loading: state.loading
    };
};

const mapDispatchToProps = { ticketLoaded };

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);