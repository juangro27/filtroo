export interface Event {
    _id: string;
    name: string;
    owner: string;
    description: string;
    address: string;
    country: string;
    city: string;
    images: string[];
    price: nunber;
    date: string;
    hosts: string[];
    createdAt: string;
    updatedAt: string;
}

export interface Queries {
    country?: string;
    city?: string;
    date?: string;
    address?: string;
    hosts?: string;
    limit?: string;
}
