import axios from 'axios';

export const fetchData = async () => {
    try {
        const res = await axios.get('https://front-test.beta.aviasales.ru/search');
        const searchId = await res.data.searchId;
        const tickets = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);

        return tickets.data.tickets.slice(0, 50);
    } catch (error) {
        throw new Error(error);
    }
};