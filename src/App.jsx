import React from 'react';

import Filter from './components/Filter/Filter';
import Tabs from './components/Tabs/Tabs';
import ErrorBoundary from './components/ErrorBoundary';

import Tickets from './components/Tickets/Tickets';

function App() {



    return (
        <div className="container">
            <div className="main-content__inner">
                <Filter />
                <div className="tickets-section">
                    <Tabs />
                    <ErrorBoundary>
                        <Tickets />
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    );
}




export default App;