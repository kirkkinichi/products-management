import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { LogController } from 'src/log/log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { ProductsService } from './products.service';
import { LogService } from 'src/log/log.service';
import { Log } from 'src/log/log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Log])],
  controllers: [ProductsController, LogController],
  providers: [ProductsService, LogService]
})
export class ProductsModule {}
