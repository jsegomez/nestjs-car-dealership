import { Injectable, NotFoundException } from '@nestjs/common';
import { cars } from './data';
import { Car } from 'src/cars/interfaces/car-interface';

@Injectable()
export class CarsService {
    private arrCars: Car[] = cars;

    public findAll(){
        return this.arrCars;
    }

    findOneById(id: number){
        const car = this.arrCars.find(car => car.id == id);        
        if(!car) throw new NotFoundException(`Car with id: ${id} not found`);
        return car;
    }

    saveCar(car: Car){
        const id = this.arrCars.length + 1;
        car.id = id;
        this.arrCars.push(car);        
    }
}
