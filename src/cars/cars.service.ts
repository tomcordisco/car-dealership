import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto/index';

@Injectable()
export class CarsService {

    private cars: Car[] = [];

    findAll() {
        return this.cars;
    }

    findOneById( id: string ){
        const car = this.cars.find( car => car.id === id);

        if( !car ){
            throw new NotFoundException(`Car with id '${ id }' not found`);
        }

        return car;
    }

    create( { model, brand }: CreateCarDto) {

        const car = {
            id: uuid(),
            brand: brand,
            model: model
        }

        this.cars.push( car );

        return car;
    }

    update( id: string, updateCarDto: UpdateCarDto ){
        let carDB = this.findOneById( id );

        if( updateCarDto.id && updateCarDto.id !== id )
            throw new BadRequestException(`Car id is not valid inside body`);

        this.cars = this.cars.map( car => {
            if(car.id === id) {
                carDB = { ...carDB, ...updateCarDto, id }
                return carDB;
            }
            return car;
        });

        
        return carDB;
    }

    delete( id: string ){
        const car = this.findOneById(id);

        this.cars.filter( car => car.id !== id );

    }

    fillCarsWithSeedData( cars: Car[] ) {
        this.cars = cars;
    }
}
