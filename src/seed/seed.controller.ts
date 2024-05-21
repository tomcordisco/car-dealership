import { Controller, Get } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';


@Controller('seed')
export class SeedController {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  @Get()
  runSeed() {
    this.carsService.fillCarsWithSeedData( CARS_SEED );
    this.brandsService.fillBrandsWithSeedData( BRANDS_SEED );

    return 'Seed executed';
  }

}