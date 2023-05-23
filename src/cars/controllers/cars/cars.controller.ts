import { Controller, Get, Post, Param, ParseIntPipe, Body, Patch, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CreateCarDTO } from 'src/cars/dto/create-car.dto';
import { CarsService } from 'src/cars/services/cars/cars.service';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService){}

    @Get('/all')
    getAllCars() {
        return this.carsService.findAll();        
    }

    @Get('/:id')
    getCarById(@Param('id', new ParseUUIDPipe({version: '4'})) id: string) {
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar(@Body() createCardDTO: CreateCarDTO){
        return this.carsService.create(createCardDTO);
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
