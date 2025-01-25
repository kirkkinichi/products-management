import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from './log.entity';

@Injectable()
export class LogService {
    constructor(
        @InjectRepository(Log)
        private logRepository: Repository<Log>,
    ) { }

    create(entidade: string, entidade_id: number) {
        const log = new Log();
        log.entidade = entidade;
        log.entidade_id = entidade_id;
        log.dtinc = new Date();
        return this.logRepository.save(log);
    }

    findAll() {
        return this.logRepository.find();
    }
}
