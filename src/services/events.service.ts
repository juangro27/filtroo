import axios, { AxiosInstance } from "axios";
import { API_URL } from "@env";

class EventsService {
    api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: `${API_URL}/events`,
        });
    }

    getAllEvents(limit: number) {
        return this.api.get(`/?limit=${limit}`);
    }

    getEvent(id: string) {
        return this.api.get(`/${id}`);
    }
}
const eventsService = new EventsService();
export default eventsService;
