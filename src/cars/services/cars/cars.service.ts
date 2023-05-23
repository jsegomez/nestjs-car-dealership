import { Injectable, NotFoundException } from '@nestjs/common';
import { cars } from './data';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO, UpdateCardDTO } from 'src/cars/dto/create-car.dto';

@Injectable()
export class CarsService {
    private arrCars = cars;

    public findAll(){
        return this.arrCars;
    }

    findOneById(id: string){
        const car = this.arrCars.find(car => car.id == id);        
        if(!car) throw new NotFoundException(`Car with id: ${id} not found`);
        return car;
    }

    create(car: CreateCarDTO){        
        const newCar = {...car, id: uuid()}
        this.arrCars.push(newCar);        
    }


    update(car: UpdateCardDTO){}
}
