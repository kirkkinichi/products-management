import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { LogModule } from './log/log.module';
import { StatusController } from './status/status.controller';  // Importa o controlador de Status
import { StatusService } from './status/status.service';  // Importa o serviço de Status
import { Product } from './products/products.entity';  // A entidade que será usada para verificar a conectividade do banco

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductsModule,
    LogModule,
    TypeOrmModule.forFeature([Product]),  // Registra a entidade Product para ser usada pelo StatusService
  ],
  controllers: [StatusController],
  providers: [StatusService],
})
export class AppModule {}
