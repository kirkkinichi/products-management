import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './log.entity';
import { LogController } from './log.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Log])],
    controllers: [LogController],
    providers: [LogService]
})
export class LogModule {}
