const INITIAL_STATE = {
    tickets: [],
    loading: true,
    tabs: 'cheap',
    selectedCheckbox: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TICKET_LOADED':
            return {
                ...state,
                tickets: action.payload,
                loading: false,
            };

        case 'ON_TAB_SELECT':
            const selectedTab = action.payload;

            return { ...state, tabs: selectedTab};
        
        case 'ADD_CHECKBOX':
            const selected = action.payload;
            
            if (state.selectedCheckbox.includes(selected)) return state;

            return { ...state, selectedCheckbox: [...state.selectedCheckbox, selected]};

        case 'REMOVE_CHECKBOX':
            const removeSelected = action.payload;

            const renewedBox = state.selectedCheckbox.filter(item => item !== removeSelected);

            return {...state, selectedCheckbox: renewedBox}

        default:
            return state;
    }
};

export default reducer;