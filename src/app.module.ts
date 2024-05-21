import { SeedController } from './seed/seed.controller';
import { Module } from '@nestjs/common';
import { BrandsModule } from './brands/brands.module';
import { CarsModule } from './cars/cars.module';
import { SeedService } from './seed/seed.service';

@Module({
  controllers: [ SeedController ],
  providers: [ SeedService ],
  imports: [ CarsModule, BrandsModule ]
})
export class SeedModule {}