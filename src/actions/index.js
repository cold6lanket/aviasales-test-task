export const ticketLoaded = (items) => {
    return {
        type: 'TICKET_LOADED',
        payload: items
    };
};

export const onTabSelect = (id) => {
    return {
        type: 'ON_TAB_SELECT',
        payload: id
    };
};

export const addSelectedCheckbox = (box) => {
    return {
        type: 'ADD_CHECKBOX',
        payload: box
    };
};

export const removeSelectedCheckbox = (box) => {
    return {
        type: 'REMOVE_CHECKBOX',
        payload: box
    };
};

