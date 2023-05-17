import { Car } from "src/cars/interfaces/car-interface";
import { v4 as uuid } from "uuid";

export const cars: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Kia',
        model: 'Soul'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    },
    {
        id: uuid(),
        brand: 'Mitsubushi',
        model: 'Lancer'
    }
];