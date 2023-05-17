import { Injectable, NotFoundException } from '@nestjs/common';
import { cars } from './data';
import { Car } from 'src/cars/interfaces/car-interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
    private arrCars: Car[] = cars;

    public findAll(){
        return this.arrCars;
    }

    findOneById(id: string){
        const car = this.arrCars.find(car => car.id == id);        
        if(!car) throw new NotFoundException(`Car with id: ${id} not found`);
        return car;
    }

    saveCar(car: Car){        
        car.id = uuid();
        console.table(car)
        this.arrCars.push(car);        
    }
}
