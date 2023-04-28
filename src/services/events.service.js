import axios from "axios";

class EventsService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.API_URL}/events`,
        });
    }

    getAllEvents(queries) {
        const queryObj = {};
        if (queries) {
            const { country, city, date, address, hosts, limit } = queries;
            if (country) queryObj.country = country;
            if (city) queryObj.city = city;
            if (date) queryObj.date = date;
            if (address) queryObj.address = address;
            if (hosts) queryObj.hosts = hosts;
            if (limit) queryObj.limit = limit;
        }
        const queryString = new URLSearchParams(queryObj).toString();
        return this.api.get(`/?${queryString}`);
    }

    getEvent(id) {
        return this.api.get(`/${id}`);
    }
}
const eventsService = new EventsService();
export default eventsService;
