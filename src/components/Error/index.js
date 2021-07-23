import React from 'react';

function Error(props) {
    const styles = {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: '2rem'
    };
    
    return (
        <div style={styles}>
            <h2>Что-то произлошло не так...</h2>
            <h2>Перезагрузите страницу</h2>
        </div>
    );
}

export default Error;