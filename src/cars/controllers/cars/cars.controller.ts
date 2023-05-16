import { Controller, Get, Post, Param, ParseIntPipe, Body, Patch, Delete } from '@nestjs/common';
import { Car } from 'src/cars/interfaces/car-interface';
import { CarsService } from 'src/cars/services/cars/cars.service';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService){}

    @Get('/all')
    getAllCars() {
        return this.carsService.findAll();        
    }

    @Get('/:id')
    getCarById(@Param('id', ParseIntPipe) id: number) {
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar(@Body() car: Car){
        return this.carsService.saveCar(car);
    }

    @Patch('/:id')
    updateCar(@Param('id', ParseIntPipe) id: number){
        return id;
    }

    @Delete('/:id')
    deleteCar(@Param('id', ParseIntPipe) id: number){
        return id;
    }
}
