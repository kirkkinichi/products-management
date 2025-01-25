import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/products/products.entity';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Verify if database is healthy
  async checkDatabase(): Promise<boolean> {
    try {
      await this.productRepository.count();
      return true;
    } catch (error) {
      return false;
    }
  }

  // Verify if server is active
  checkServer(): boolean {
    return true;
  }
}
