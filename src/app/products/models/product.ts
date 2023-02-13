export interface Product {
    id: number,
    name: string,
    availability: boolean,
    price: number,
    picture: string,
    category: string,
    arrival: Date,
    address?: Address
}

export interface Address {
    id: number,
    street: string,
    state: string
}