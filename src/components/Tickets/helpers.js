export const minutesToHours = (num) => { 
    const hours = Math.floor(num / 60);  
    const minutes = num % 60;

    return `${hours}ч ${minutes}м`;         
}

export const stops = (length) => {
    if (length === 1) {
        return '1 ПЕРЕСАДКА';
    }

    return `${length} ПЕРЕСАДКИ`
};

export const showSelectedCheckboxes = (selected, tickets) => {
    if (!selected) return tickets;
   
    let final = ["Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки"];
    let items = [];

    selected.forEach((item) => {
        if (final.includes(item)) {
            if (item === final[0]) {
                items.push(0);
            } else if (item === final[1]) {
                items.push(1);
            } else if (item === final[2]) {
                items.push(2);
            } else if (item === final[3]) {
                items.push(3);
            }
        }
    });

    return items.length > 0 ? tickets.filter((ticket) => items.includes(ticket.segments[0].stops.length)) : tickets;
};