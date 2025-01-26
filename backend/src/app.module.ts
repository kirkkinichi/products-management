import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { LogModule } from './log/log.module';
import { StatusController } from './status/status.controller';
import { StatusService } from './status/status.service';
import { Product } from './products/products.entity';

@Module({
  imports: [
    // Setting up the database connection using SQLite with TypeORM
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductsModule,
    LogModule,
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [StatusController], 
  providers: [StatusService],
})
export class AppModule {}
