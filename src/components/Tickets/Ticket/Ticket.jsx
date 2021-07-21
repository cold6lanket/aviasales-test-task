import React from 'react';
import moment from 'moment';
import { minutesToHours, stops } from '../helpers';

function Ticket({ item }) {
    return (
        <div className="ticket">
                <div className="ticket__inner">
                    <div className="ticket-upper">
                        <div className="ticket-price">
                            {item.price.toString().slice(0, 2)} {item.price.toString().slice(2)} P
                        </div>
                        <div className="logo">
                            <img src="https://pics.avs.io/99/36/%7BS7%7D.png" width="110" alt="s7" />
                        </div>
                    </div>
                    
                    <div className="ticket-lower">
                        <div className="fromto">
                            <p>{item.segments[0].origin} - {item.segments[0].destination}</p>
                            <div className="time">
                                <span id="startpoint">{moment(item.segments[0].date).format('hh:mm')} - </span>
                                <span id="endpoint">{moment(item.segments[0].date).add(item.segments[0].duration, 'minutes').format('hh:mm')}</span>
                            </div>
                        </div>
                        <div className="total-time">
                            <p>В ПУТИ</p>
                            <div className="time">
                                {minutesToHours(item.segments[0].duration)}
                            </div>
                        </div>
                        <div className="stops">
                            <p>{(!item.segments[0].stops.length) ? ('БЕЗ ПЕРЕСАДОК') : stops(item.segments[0].stops.length)}</p>
                            <div className="cities">
                                <span id="startpoint">{item.segments[0].stops.join(', ')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="ticket-lower">
                        <div className="fromto">
                            <p>{item.segments[1].origin} - {item.segments[1].destination}</p>
                            <div className="time">
                                <span id="startpoint">{moment(item.segments[1].date).format('hh:mm')} - </span>
                                <span id="endpoint">{moment(item.segments[1].date).add(item.segments[1].duration, 'minutes').format('hh:mm')}</span>
                            </div>
                        </div>
                        <div className="total-time">
                            <p>В ПУТИ</p>
                            <div className="time">
                                {minutesToHours(item.segments[1].duration)}
                            </div>
                        </div>
                        <div className="stops">
                            <p>{(!item.segments[1].stops.length) ? ('БЕЗ ПЕРЕСАДОК'): stops(item.segments[1].stops.length)}</p>
                            <div className="cities">
                                <span id="startpoint">{item.segments[1].stops.join(', ')}</span>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div> 
    );
}

export default Ticket;