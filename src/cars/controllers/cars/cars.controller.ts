import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from 'src/cars/services/cars/cars.service';

@Controller('cars')
export class CarsController {
    constructor(private carsService: CarsService){}

    @Get("/all")
    getAllCars() {
        // this.carsService
    }

    @Get("/:id")
    getCarById(@Param("id") id: number) {
        if(isNaN(id)) return "Parámetro invalido"
        // return this.cars[id];
    }
}
