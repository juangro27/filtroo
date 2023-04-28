import axios, { AxiosInstance } from "axios";
import { API_URL } from "@env";
import { Queries } from "types/event";

class EventsService {
    api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: `${API_URL}/events`,
        });
    }

    getAllEvents(queries: Queries) {
        const queryObj: any = {};
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

    getEvent(id: string) {
        return this.api.get(`/${id}`);
    }
}
const eventsService = new EventsService();
export default eventsService;
