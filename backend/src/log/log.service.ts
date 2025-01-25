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

    async findLogs(entidade: string, pagina: number, limite: number) {
        const skip = (pagina - 1) * limite;

        const queryBuilder = this.logRepository.createQueryBuilder('log');

        if (entidade) {
            queryBuilder.andWhere('log.entidade = :entidade', { entidade });
        }

        return queryBuilder
            .skip(skip)
            .take(limite)
            .getMany();
    }
}
